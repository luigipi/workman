import React from 'react';
import { View, Text, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";

const ListItem = ({ text, onPress }) => (
    <View style={styles.itemHolder}>
        <TouchableHighlight onPress={onPress} style={styles.itemTouchable} underlayColor="transparent">
            <View>
                <Text style={styles.itemText}>{text}</Text>
            </View>
         </TouchableHighlight>
    </View>
);

ListItem.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
}

export default ListItem;