'use strict'

import React, {Component, isValidElement} from 'react'
import {View, Platform} from 'react-native'
import WebView from 'react-native-webview'
import renderChart from './echarts/renderChart'
import HtmlWeb from './echarts/utils/htmlWeb'
import combineOptions from './echarts/utils/combineOptions'
import Loading from '../other/loading'
import Empty from '../other/empty'

export default class Echart extends Component {
    constructor(props) {
        super(props)
        this.options = {}
        this.isloaded = false
        this.state = {
            options: {}
        }
    }

    componentDidMount() {
        React.Children.map(this.props.children, (children, idx) => {
            if (isValidElement(children)) {
                idx == this.props.children.length - 1 ? (this.isloaded = true) : ''
                this.receiveChildOption(children.type.displayName, children.props)
            }
        })
    }

    receiveChildOption = (name, option) => {
        const newOptions = combineOptions(this.options[name], option, name)
        if (newOptions) {
            this.options[name] = newOptions
            if (this.isloaded) {
                this.setState({options: this.options})
            }
        }
    }

    renderEmpty = () => {
        return <Empty height={this.props.height || 400} />
    }

    renderLoading = () => {
        return <Loading height={this.props.height || 400} />
    }

    render() {
        return (
            Object.keys(this.state.options).length == 0? this.renderLoading():
                this.state.options.xAxis.data.length == 0? this.renderEmpty():
                    <View style={{height: this.props.height || 400}}>
                        <WebView
                            ref={ref => this.webview = ref}
                            key={Math.random()}
                            style={{height: this.props.height || 400, width: this.props.width || '100%'}}
                            textZoom={100}
                            scrollEnabled={true}
                            scalesPageToFit={Platform.OS !== 'ios'}
                            originWhitelist={['*']}
                            javaScriptEnabled={true}
                            javaScriptEnabledAndroid={true}
                            onMessage={(event) => {}}
                            source={{html: HtmlWeb}}
                            startInLoadingState={Object.keys(this.state.options).length == 0? true:false}
                            renderLoading={() => this.renderLoading()}
                            injectedJavaScript={renderChart(this.props, this.state.options)}
                        />
                    </View>
        )
    }
}
