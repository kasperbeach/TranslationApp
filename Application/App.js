import React, { Component } from 'react';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration } from 'react-native-power-translator';
import { View, KeyboardAvoidingView, Text, TextInput, Picker } from 'react-native';
import { SECRET_CODE } from 'react-native-dotenv';
   
export default class PowerTranslatorDemo extends Component {

    constructor() {
        super();
        this.state = { languageCode: 'zh-CN', text: ''};
    }

    render() {
        const styles = this.getStyles();
        TranslatorConfiguration.setConfig(ProviderTypes.Google, SECRET_CODE, this.state.languageCode);
        return (
            <KeyboardAvoidingView style={styles.container}>

                <Picker selectedValue={this.state.languageCode} onValueChange = {(itemValue, itemIndex) => this.setState({languageCode: itemValue})}>
                    <Picker.Item label='English' value = 'en'/>
                    <Picker.Item label='French' value = 'fr'/>
                    <Picker.Item label='Russian' value = 'ru'/>
                    <Picker.Item label='German' value = 'de'/>
                    <Picker.Item label='Chinese (Simplified)' value = 'zh-CN'/>
                    <Picker.Item label='Chinese (Traditional)' value = 'zh-TW'/>
                    <Picker.Item label='Spanish' value = 'es'/>
                    <Picker.Item label='Arabic' value = 'ar'/>
                </Picker>
                
                <View style={{padding: 50}}>
                    <TextInput style={{height: 40}} placeholder="Type here to translate!" onChangeText={(text) => this.setState({text: text})} enablesReturnKeyAutomatically={true} autoFocus={true} />
                    <PowerTranslator style = {styles.title} text={this.state.text} />
                    <Text>
                        {this.state.text}
                    </Text>
                </View>
            
            </KeyboardAvoidingView>
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
}