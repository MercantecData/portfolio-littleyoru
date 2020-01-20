import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class InfoLine extends Component {

    constructor(props) {
        super(props)
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>{this.props.label}</Text>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        fontSize: 24,
        fontWeight: '900',
        flexDirection: 'row'
    }
})

export default InfoLine;