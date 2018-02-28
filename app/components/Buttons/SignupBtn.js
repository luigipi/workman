import React, { Component } from 'react';
import styles from './styles';
import PropTypes from "prop-types";
import { Text, View, TouchableHighlight, Image } from 'react-native';

const SignupBtn = ({ text, onPress }) => (


    <TouchableHighlight onPress={onPress} style={styles.container}>
        <View style={styles.emailbuttonContainer}>
            <Text style={styles.signuptext}>{text}</Text>
        </View>
    </TouchableHighlight>



);

SignupBtn.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
}
export default SignupBtn;