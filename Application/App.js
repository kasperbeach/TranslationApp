import React, { Component } from 'react';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration } from 'react-native-power-translator';
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';
import { SECRET_CODE } from 'react-native-dotenv';

export default class PowerTranslatorDemo extends Component {

    constructor() {
        super();
        this.state = { languageCode: 'fr', text: ''};
    }

    render() {
        const styles = this.getStyles();
        TranslatorConfiguration.setConfig(ProviderTypes.Google, SECRET_CODE, this.state.languageCode);

        return (
            <ScrollView style={styles.container}>
                <View style={styles.languageBar}>
                    <TouchableOpacity onPress={() => { this.changeLanguage('en') }}><Text style={styles.p}>English</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.changeLanguage('fr') }}><Text style={styles.p}>French</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.changeLanguage('ru') }}><Text style={styles.p}>Russian</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.changeLanguage('de') }}><Text style={styles.p}>German</Text></TouchableOpacity>
                </View>
                <View style={{padding: 50}}>
                  <TextInput style={{height: 40}}placeholder="Type here to translate!"onChangeText={(text) => this.setState({text})}/>
                  <PowerTranslator style ={styles.title} text={this.state.text} />
                </View>
            </ScrollView>
        );
    }

    getStyles() {
        return {
            container: {
                padding: 40,
                backgroundColor: '#FAFAFA',
            },
            section: {
                marginTop: 15,
                marginBottom: 15,
            },
            title: {
                marginTop: 80,
                marginBottom: 5,
                fontWeight: 'bold',
                fontSize: 38,
                lineHeight: 38
            },
            subtitle: {
                color: '#B3B3B3',
            },
            p: {
                color: '#828280',
                lineHeight: 24
            },
            languageBar: {
                flexDirection: 'row',
                justifyContent: 'space-between'
            },
            languageBarItem: {
                color: '#828280',
            }
        }
    }

    changeLanguage(languageCode) {
        this.setState({ languageCode: languageCode });
    }
}