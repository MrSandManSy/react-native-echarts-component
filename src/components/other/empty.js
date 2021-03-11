'use strict'

import React, {Component} from 'react'
import {View, Image} from 'react-native'

class Empty extends Component {

    render() {
        return (
            <View style={{padding: 20, height: this.props.height, alignItems: 'center', justifyContent: 'center',}}>
                <Image source={require('../../assets/empty.png')} />
            </View>
        )
    }

}

export default Empty
