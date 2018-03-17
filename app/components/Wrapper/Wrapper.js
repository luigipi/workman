import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { TouchableWithoutFeedback, View, } from "react-native";



const Wrapper = ({ children }) => (

    <TouchableWithoutFeedback >
        <View style={styles.wrapper}>
            {children}
        </View>
    </TouchableWithoutFeedback>
);

Wrapper.propTypes = {
    children: PropTypes.any,
};

export default Wrapper;