import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Pet from '../components/Pet';
import snowball from '../assets/pets/Snowball.jpg';
import nightshadow from '../assets/pets/Nightshadow.jpg';
import mjavse from '../assets/pets/Mjavse.jpg';
import garfield from '../assets/pets/Garfield.png';

class PetView extends Component {
    // create the title for the screen
    static navigationOptions = {
        title : "Pets Info"
    }
    
    constructor(props) {
        super(props)
        this.state = {
            petList: []
        };
    }

    componentDidMount() {
        let testPetList = [
            {
                key: '1',
                name: 'Snowball',
                sex: 'M',
                race: 'Russian Blue',
                age: 0.25, // in years
                isAdult: false,
                type: 'cat',
                sterilised: false,
                city: 'Viborg',
                picUrl: snowball
            }, {
                key: '2',
                name: 'Nightshadow',
                sex: 'M',
                race: 'Russian Blue',
                age: 0.5, // in years
                isAdult: false,
                type: 'cat',
                sterilised: false,
                city: 'Aalborg',
                picUrl: nightshadow
            },
            {
                key: '3',
                name: 'Mjavse',
                sex: 'F',
                race: 'American Short Haired',
                age: 0.25,
                isAdult: false,
                type: 'cat',
                sterilised: false,
                city: 'Silkeborg',
                picUrl: mjavse
            },
            {
                key: '4',
                name: 'Garfield',
                sex: 'M',
                race: 'Scottish Fold',
                age: 0.25,
                isAdult: false,
                type: 'cat',
                sterilised: false,
                city: 'Viborg',
                picUrl: garfield
            }
        ];
        this.setState({
            petList: testPetList
        });
    }

    render() {

        // const renderPet = (pet) => {
        //     return (
        //         <Pet key={pet.key} info={pet} />
        //     );
        // }

        return (
            <View style={styles.container}>
                <FlatList data={this.state.petList} renderItem={({item}) => <Pet key={item.key} info={item} />} numColumns={3} />
                {/*testPetList.map(pet)*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 16
    }
  })
  

export default PetView;