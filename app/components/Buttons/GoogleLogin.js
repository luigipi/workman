import React, { Component } from 'react';
import styles from './styles';
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, Image } from 'react-native';

const GoogleLogin = ({ text, onPress }) => (

    <View style={styles.container}>
        <TouchableHighlight onPress={onPress} style={styles.buttonContainer}>
            <Image
                resizeMode="contain"
                source={require('./images/google.png')}
                style={styles.icon}
            />

        </TouchableHighlight>
        <Text style={styles.text}>{text}</Text>
    </View>

);

GoogleLogin.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
}
export default GoogleLogin;