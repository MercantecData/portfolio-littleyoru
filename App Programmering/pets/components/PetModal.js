import React, { Component } from 'react';
import { Modal, Text, View, TouchableHighlight, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import GenderIcon from './GenderIcon';
import InfoLine from './InfoLine';

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
                <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalHeaderText}>Details</Text>
                            <TouchableHighlight onPress={() => this.toggleModal()} style={styles.closeBg}>
                                <Icon name={'close'} type='AntDesign' color='#262626' />
                            </TouchableHighlight>
                        </View>
                        <Image source={item.picUrl} style={styles.image} />
                        <View style={styles.modalContent}>
                            <InfoLine label={'Name: '} text={item.name} />
                            <View style={{flexDirection: 'row', padding: 8, alignItems: 'center'}}>
                                <GenderIcon sex={item.sex} />
                                <Text style={{marginLeft: 8}}>{item.isAdult ? 'Adult' : this.getCubName(item.type) }</Text>
                            </View>
                            <InfoLine label={'Race: '} text={item.race} />
                            <InfoLine label={'Age: '} text={item.age} />
                            <InfoLine label={canReproduceText + ': '} text={item.sterilised ? 'yes' : 'no'} />
                            <InfoLine label={'Location: '} text={item.city} />
                        </View>
                        <Text>My story: {item.description}</Text>
                    </View>
                </SafeAreaView>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#F2F2F2'
    },
    modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8
    },
    modalHeaderText: {
        fontSize: 24,
        flex: 1,
        alignSelf: 'center'
    },
    modalContainer: {
        backgroundColor: 'transparent',
        padding: 8
    },
    modalContent: {
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'stretch'
    },
    closeBg: {
        alignSelf: 'flex-end'
    },
    image: {
        maxWidth: 300,
        maxHeight: 300,
        alignSelf: 'center'
    }
})

export default PetModal;