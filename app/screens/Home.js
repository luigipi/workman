import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { LoginButton, GoogleLogin, FootButton } from '../components/Buttons';
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";

class Home extends Component {

    handleButtonPress = () => {
        console.log('Facebook button pressed');
    }
    render() {
        return (
            <Container>
                <Logo />
                <LoginButton
                    text="Continue with facebook"
                    icon={require('../components/Buttons/images/fb.png')}
                />
                <GoogleLogin
                    text="Continue with Google"
                    icon={require('../components/Buttons/images/google.png')}
                />
                <FootButton
                    logintext="Already have an account?"
                    boldtext="Login"
                />
            </Container>
        );
    }
}


export default (Home);