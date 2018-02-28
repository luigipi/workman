import React, { Component } from 'react';
import styles from './styles';
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, Image } from 'react-native';

const GoogleLogin = ({ text, onPress }) => (


    <TouchableHighlight onPress={onPress} style={styles.container}>
        <View style={styles.buttonContainer}>
            <Image
                resizeMode="contain"
                source={require('./images/google.png')}
                style={styles.icon}
            />
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableHighlight>



);

GoogleLogin.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
}
export default GoogleLogin;