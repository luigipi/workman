import React, { Component } from 'react';
import styles from './styles';
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, Image } from 'react-native';

const LoginButton = ({ text, onPress }) => (


    <TouchableHighlight onPress={onPress} style={styles.container}>
        <View style={styles.buttonContainer}>
            <Image
                resizeMode="contain"
                source={require('./images/fb.png')}
                style={styles.icon}
            />
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableHighlight>


);

LoginButton.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
}
export default LoginButton;