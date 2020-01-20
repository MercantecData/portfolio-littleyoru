import React, { Component } from 'react';
import { Modal, Text, View, TouchableHighlight, StyleSheet, Image } from 'react-native';

class PetModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    toggleModal = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    getCubName = (type) => {
        switch (type) {
            case 'cat':
                return 'Kitten';
            case 'dog':
                return 'Puppy';
            default:
                return 'Not adult';
        }
    }

    render() {

        let { item } = this.props;
        let canReproduceText = item.sex === 'M' ? 'Castrated' : 'Sterilised';

        return (
            <Modal 
                style={styles.modal} 
                visible={this.state.visible} 
                onBackDropPress={() => this.toggleModal()} 
                onRequestClose={() => this.toggleModal()}>
                <View style={styles.modalContent}>
                    <TouchableHighlight onPress={() => this.toggleModal()} style={styles.closeBg}>
                        <Text style={styles.closeBtn}>X</Text>
                    </TouchableHighlight>
                    <Image source={item.picUrl} style={styles.image} />
                    <Text>Name: {item.name}</Text>
                    <Text>Race: {item.race}</Text>
                    <Text>Sex: {item.sex}, {item.isAdult ? 'Adult' : this.getCubName(item.type) }</Text>
                    <Text>{canReproduceText}: {item.sterilised ? 'yes' : 'no'}</Text>
                    <Text>Age: {item.age}</Text>
                    <Text>Location: {item.city}</Text>
                    <Text>My story: {item.description}</Text>
                </View>

            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        marginTop: 16,
        padding: 8,
        flex: 1
    },
    modalContent: {
        backgroundColor: '#DDDDDD',
        padding: 8
    },
    closeBtn: {
        paddingHorizontal: 16,
        color: '#38AAEB',
        fontWeight: '900',
        fontSize: 32
    },
    closeBg: {
        alignSelf: 'flex-end'
    },
    image: {
        maxWidth: 300,
        maxHeight: 300
    }
})

export default PetModal;