import React from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";


const FootButton = ({ onPress, text, logintext, boldtext }) => (
    <View style={styles.footTouchable}>
        <View>
            <Text style={styles.foottouchabletext}>{logintext}</Text>
        </View>
        <TouchableOpacity onPress={onPress} style={styles.FootButton}>
            <Text style={styles.boldtext}>{boldtext}</Text>
        </TouchableOpacity>

    </View>

);

FootButton.propTypes = {
    text: PropTypes.string,
    logintext: PropTypes.string,
    boldtext: PropTypes.string,
    onPress: PropTypes.func,
}

export default FootButton;