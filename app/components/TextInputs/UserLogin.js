import React, { Component } from 'react';
import EStyleSheet from "react-native-extended-stylesheet";
import { Text, View, TextInput, StatusBar, TouchableHighlight, TouchableOpacity, ImageBackground } from "react-native";

import styles from "./styles";


class UserLogin extends Component {
    constructor(props) {
        super(props);
    }
    loginPress = () => {
        console.log('Login attempt');
    }
    render() {
        return (

            <View style={styles.container}>
                <View style={styles.logintitle}>
                    <Text >Login</Text>
                </View>
                <TextInput
                    placeholder="Enter Username"
                    style={styles.userinput}
                    onChangeText={this.state}
                />
                <TextInput
                    placeholder="Enter Password"
                    style={styles.userinput}
                    secureTextEntry={true}
                    onChangeText={this.state}
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
        );
    }
}



export default UserLogin;