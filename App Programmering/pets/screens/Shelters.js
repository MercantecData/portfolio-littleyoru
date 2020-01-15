import React, { Component } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

class Shelters extends Component {

    static navigationOptions = {
        title: 'Shelters'
    }
    render () {
        return(
            <View style={styles.mapsContainer}>
                <MapView style={styles.maps} 
                    region={{latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,}}
                    showsUserLocation />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mapsContainer: {
        flex: 1
    },
    maps: {
        flex: 0.8
    }
})

export default Shelters;