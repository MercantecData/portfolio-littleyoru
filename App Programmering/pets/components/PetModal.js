import React, { Component } from 'react';
import { Modal, Text, View, TouchableHighlight, StyleSheet, Image, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import GenderIcon from './GenderIcon';
import InfoCell from './InfoCell';

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

        let genderIcon = (
            <GenderIcon sex={item.sex} />
        )

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
                            <InfoCell label={'Name:'} text={item.name} />
                            {/*<View style={{flexDirection: 'row', padding: 8, alignItems: 'center'}}>
                                <GenderIcon sex={item.sex} />
                                <Text style={{marginLeft: 8}}>{item.isAdult ? 'Adult' : this.getCubName(item.type) }</Text>
                            </View>*/}
                            <InfoCell icon={genderIcon} text={item.isAdult ? 'Adult' : this.getCubName(item.type)} />
                            <InfoCell label={'Race:'} text={item.race} />
                            <InfoCell label={'Age:'} text={item.age} />
                            <InfoCell label={canReproduceText + ':'} text={item.sterilised ? 'Yes' : 'No'} />
                            <InfoCell label={'Location:'} text={item.city} />
                        </View>
                        <View>
                            <Text style={styles.descriptionLabel}>My story:</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
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
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'row',
        //alignContent: 'stretch'
    },
    closeBg: {
        alignSelf: 'flex-end'
    },
    image: {
        maxWidth: 350,
        maxHeight: 350,
        alignSelf: 'center'
    },
    description: {
        fontSize: 16,
        paddingHorizontal: 8
    },
    descriptionLabel: {
        fontSize: 16,
        fontWeight: '700',
        padding: 8
    }
})

export default PetModal;