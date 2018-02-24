import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";


const FootButton = ({ onPress, text, logintext, boldtext }) => (
    <View style={styles.footbutton}>
        <TouchableOpacity onPress={onPress} style={styles.footTouchable}>
            <Text style={styles.text}>{logintext}</Text>
        </TouchableOpacity>
        <View>
            <Text style={styles.boldtext}>{boldtext}</Text>
        </View>
    </View>

);

FootButton.propTypes = {
    text: PropTypes.string,
    logintext: PropTypes.string,
    boldtext: PropTypes.string,
    onPress: PropTypes.func,
}

export default FootButton;