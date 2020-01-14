import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HomeScreen extends Component {

    // create the title for the screen
    static navigationOptions = {
        title : "HomeScreen"
    }
  
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Button title={'Go to Pets view'} onPress={() => {this.props.navigation.navigate('PetView')}}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;