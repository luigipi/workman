import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar } from 'react-native';
import { LoginButton, GoogleLogin, FootButton, SignupBtn } from '../components/Buttons';
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { UserLogin, UserRegTextInput } from "../components/TextInputs/";

class Home extends Component {

    handleButtonPress = () => {
        console.log('Google button pressed');
    }
    handleFbButton = () => {
        console.log('Facebook button pressed');
    }
    handleEmailSignup = () => {
        console.log('email sign up pressed');
    }
    handleLogin = () => {
        console.log('Login pressed');
    }
    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <UserRegTextInput />

            </Container>
        );
    }
}


export default (Home);