import React, { Component } from 'react';
import { View, FlatList, StyleSheet, TouchableHighlight, ScrollView, Dimensions } from 'react-native';
import PetCard from '../components/PetCard';
import PetModal from '../components/PetModal';
import snowball from '../assets/pets/Snowball.jpg';
import nightshadow from '../assets/pets/Nightshadow.jpg';
import mjavse from '../assets/pets/Mjavse.jpg';
import garfield from '../assets/pets/Garfield.png';
import shadow from '../assets/pets/Shadow.jpg';
import whitefang from '../assets/pets/WhiteFang.jpg';
import bobby from '../assets/pets/Bobby.jpg';
import lady from '../assets/pets/Lady.jpg';
import beethoven from '../assets/pets/Beethoven.jpg';

var deviceWidth = Dimensions.get('window').width;

class PetView extends Component {
    // create the title for the screen
    static navigationOptions = {
        title : "Pets Info"
    }
    
    constructor(props) {
        super(props)
        this.state = {
            petList: [],
            modalOpened: false,
            selectedPet: 0
        };
    }

    componentDidMount() {
        let testPetList = [
            {
                key: 1,
                name: 'Snowball',
                sex: 'M',
                race: 'Russian Blue',
                age: 0.25, // in years
                isAdult: false,
                type: 'cat',
                sterilised: false,
                city: 'Viborg',
                picUrl: snowball,
                description: ''
            }, 
            {
                key: 2,
                name: 'Nightshadow',
                sex: 'M',
                race: 'Russian Blue',
                age: 0.5, // in years
                isAdult: false,
                type: 'cat',
                sterilised: false,
                city: 'Aalborg',
                picUrl: nightshadow,
                description: ''
            },
            {
                key: 3,
                name: 'Mjavse',
                sex: 'F',
                race: 'American Short Haired',
                age: 0.25,
                isAdult: false,
                type: 'cat',
                sterilised: false,
                city: 'Silkeborg',
                picUrl: mjavse,
                description: ''
            },
            {
                key: 4,
                name: 'Garfield',
                sex: 'M',
                race: 'Scottish Fold',
                age: 0.25,
                isAdult: false,
                type: 'cat',
                sterilised: false,
                city: 'Viborg',
                picUrl: garfield,
                description: ''
            },
            {
                key: 5,
                name: 'Shadow',
                sex: 'M',
                race: 'Siberian Husky',
                age: 5,
                isAdult: true,
                type: 'dog',
                sterilised: false,
                city: 'Aalborg',
                picUrl: shadow,
                description: ''
            },
            {
                key: 6,
                name: 'White Fang',
                sex: 'M',
                race: 'Siberian Husky',
                age: 0.25,
                isAdult: false,
                type: 'dog',
                sterilised: false,
                city: 'Aalborg',
                picUrl: whitefang,
                description: ''
            },
            {
                key: 7,
                name: 'Bobby',
                sex: 'M',
                race: 'Chihuahua',
                age: 4,
                isAdult: true,
                type: 'dog',
                sterilised: true,
                city: 'Roskilde',
                picUrl: bobby,
                description: ''
            },
            {
                key: 8,
                name: 'Lady',
                sex: 'F',
                race: 'Poodle',
                age: 6,
                isAdult: true,
                type: 'dog',
                sterilised: true,
                city: 'Copenhagen',
                picUrl: lady,
                description: ''
            },
            {
                key: 9,
                name: 'Beethoven',
                sex: 'M',
                race: 'St. Bernard',
                age: '8',
                isAdult: true,
                type: 'dog',
                sterilised: false,
                city: 'Roskilde',
                picUrl: beethoven,
                description: "Moose is a big and boisterous boy who can't wait to join your family! This lovebug loves all people he meets, especially children, and will bring endless joy to any household he joins. He pulls hard on leash and is very excitable, and should therefore go to a physically strong family with large breed experience. If your family sounds like the right fit, send in an application to meet him today!"
            }
        ];
        this.setState({
            petList: testPetList
        });
    }

    toggleModalVisibility = (key = 0) => {
        this.setState({
            selectedPet: key,
            modalOpened: true
        }, () => {
            if (this.petModal) {
                this.petModal.toggleModal();
            }
        });
    }

    render() {

        const petItem = (item) => {
            return (
                <TouchableHighlight onPress={() => this.toggleModalVisibility(item.key - 1)} key={item.key} style={styles.touchPetCard}>
                    <PetCard info={item} />
                </TouchableHighlight>
            )
        }

        return (
            <View style={styles.container}>
                <ScrollView horizontal pagingEnabled>
                    {this.state.petList.map(petItem)}
                </ScrollView>
                {/*<FlatList data={this.state.petList} renderItem={petItem} numColumns={3} />*/}
                {this.state.modalOpened && <PetModal ref={ref => this.petModal = ref} item={this.state.petList[this.state.selectedPet]} />}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    touchPetCard: {
        width: deviceWidth,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
  })
  

export default PetView;