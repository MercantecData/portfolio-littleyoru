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

    render() {

        let { item } = this.props
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
                    <Image source={item.picUrl} style={{maxWidth: 100, maxHeight: 100}} />
                    <Text>{item.name}</Text>
                    <Text>{item.race}</Text>
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
        backgroundColor: '#DDDDDD'
    },
    closeBtn: {
        paddingHorizontal: 16,
        color: '#38AAEB',
        fontWeight: '900',
        fontSize: 32
    },
    closeBg: {
        alignSelf: 'flex-end'
    }
})

export default PetModal;