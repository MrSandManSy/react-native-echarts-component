import React, { PureComponent, isValidElement } from 'react'
import combineOptions from './echarts/utils/combineOptions'
import isEqual from './echarts/utils/isEqual'

export default class extends PureComponent {
    constructor(props) {
        super(props)
        this.options = {
            __rechartId: `ec-${Date.now() + Math.ceil(Math.random() * 10000)}`
        }
    }

    componentDidMount() {
        this.handlePushOption()
    }

    componentDidUpdate(preProps) {
        if (!isEqual(this.props, preProps, { exclude: ['children', 'triggerPushOption'] })) {
            this.handlePushOption()
        }
    }

    handlePushOption = () => {
        const { triggerPushOption, children, ...props } = this.props
        if (triggerPushOption) {
            triggerPushOption(this.name, Object.assign({}, props, this.options))
        }
    }

    handleReceiveChildOption = (name, option) => {
        const newOption = combineOptions(this.options[name], option)
        if (newOption) {
            this.options[name] = newOption
            this.handlePushOption()
        }
    }
    
    render() {
        if (this.props.children) {
            return React.Children.map(this.props.children, children => {
                if (isValidElement(children)) {
                    return React.cloneElement(children, {
                        triggerPushOption: this.handleReceiveChildOption
                    })
                }
                return children
            })
        }
        return null
    }
}
