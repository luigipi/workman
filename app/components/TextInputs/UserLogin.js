import React, { Component } from 'react';
import EStyleSheet from "react-native-extended-stylesheet";
import {
    Text, View, TextInput, StatusBar, TouchableHighlight,
    TouchableWithoutFeedback, Keyboard, TouchableOpacity, ImageBackground, KeyboardAvoidingView, Alert
} from "react-native";

import styles from "./styles";

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }

    }
    loginPress = () => {

        console.log('Login attempt');
        const loginApi = 'http://iborwoman.com/api/users/userLogin.php';

        fetch(loginApi, {
            method: 'POST',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson === 'Data Matched') {
                    Alert.alert('Login Success')
                }
                else {
                    Alert.alert(responseJson);
                }
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
                            <Text style={styles.screentitle} >Login</Text>
                        </View>
                        <TextInput
                            placeholder="Enter Username"
                            style={styles.userinput}
                            onChangeText={(username) => this.setState({ username })}
                        />
                        <TextInput
                            placeholder="Enter Password"
                            style={styles.userinput}
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({ password })}
                        />
                        <TouchableHighlight style={styles.loginbtn} onPress={this.loginPress}>
                            <Text style={styles.text}>Login</Text>
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



export default UserLogin;