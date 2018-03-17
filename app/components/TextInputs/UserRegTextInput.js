import React, { Component } from 'react';
import EStyleSheet from "react-native-extended-stylesheet";
import {
    Text, View, Keyboard, TextInput, StatusBar, TouchableHighlight,
    TouchableOpacity, ImageBackground,
    KeyboardAvoidingView, TouchableWithoutFeedback, Alert
} from "react-native";

import styles from "./styles";


class UserRegTextInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: "",
            email: "",
        }

    }
    loginPress = () => {
        console.log('Login attempt');
    }
    signupPress = () => {
        console.log('Sign up attempt');
        const apiUrl = "http://iborwoman.com/api/users/";
        fetch(apiUrl, {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                Alert.alert(responseJson)
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="padding">
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.container}>

                        <View style={styles.logintitle}>
                            <Text style={styles.screentitle}>Create Account</Text>
                        </View>
                        <TextInput
                            placeholder="Full name"
                            style={styles.userinput}
                            onChangeText={(name) => this.setState({ name })}
                        />
                        <TextInput
                            placeholder="Email address"
                            style={styles.userinput}
                            onChangeText={(email) => this.setState({ email })}
                        />
                        <TextInput
                            placeholder="Enter Password"
                            style={styles.userinput}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                        <TouchableHighlight style={styles.loginbtn} onPress={this.signupPress}>
                            <Text style={styles.text}>Sign up</Text>
                        </TouchableHighlight>
                        <View style={styles.footTouchable}>
                            <View>
                                <Text style={styles.foottouchabletext}>Already have an account? </Text>
                            </View>
                            <TouchableOpacity onPress={this.loginPress} style={styles.FootButton}>
                                <Text style={styles.boldtext}>Login</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

export default UserRegTextInput;