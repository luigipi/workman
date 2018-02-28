import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";
import { TouchableWithoutFeedback, View, ImageBackground } from "react-native";



const Container = ({ children }) => (

    <TouchableWithoutFeedback >
        <View style={styles.container}>
            {children}
        </View>
    </TouchableWithoutFeedback>
);

Container.propTypes = {
    children: PropTypes.any,
};

export default Container;