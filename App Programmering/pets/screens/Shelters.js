import React, { Component } from 'react';
import MapView from 'react-native-maps';
//import Geolocation, { requestAuthorization } from 'react-native-geolocation-service';
import { StyleSheet, View } from 'react-native';

class Shelters extends Component {

    static navigationOptions = {
        title: 'Shelters'
    }

    constructor(props) {
        super(props);

    // Geolocation.setRNConfiguration(skipPermissionRequests);
    // Geolocation.requestAuthorization();
        // this.state = {
        //     region: {
        //       latitude:       LATITUDE,
        //       longitude:      LONGITUDE,
        //       latitudeDelta:  LATITUDE_DELTA,
        //       longitudeDelta: LONGITUDE_DELTA,
        //     },
        //     marker: {
        //       latlng:{
        //         latitude:       null,
        //         longitude:      null,
        //         latitudeDelta:  LATITUDE_DELTA,
        //         longitudeDelta: LONGITUDE_DELTA
        //       }
        //     }
        //   }
    }

    // onRegionChange(region) {
    //     this.setState({ region });
    // }

    // getInitialState() {
    //     return {
    //       region: {
    //         latitude: 37.78825,
    //         longitude: -122.4324,
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //       },
    //     };
    // }

    render () {
        return(
            <View style={styles.mapsContainer}>
                <MapView style={styles.maps} 
                    region={{latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,}}
                    showsUserLocation
                    /* onRegionChange={this.onRegionChange} */ />
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