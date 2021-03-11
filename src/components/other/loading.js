'use strict'

import React, {Component} from 'react'
import {View, ActivityIndicator} from 'react-native'

class Loading extends Component {

    render() {
        return (
            <View style={{padding: 20, height: this.props.height, justifyContent: 'center'}}>
                <ActivityIndicator color="black" animating={true} />
            </View>
        )
    }

}

export default Loading
