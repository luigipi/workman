import React from "react";
import PropTypes from "prop-types";
import { ImageBackground, Text, View } from "react-native";
import styles from "./styles";



const ServiceScreenHeader = ({ text }) => (

    <ImageBackground
        style={styles.dashboardHeaderView}
        resizeMode="contain"
        source={require('./images/tools2.jpg')}
    >
        <View>
            <Text>{text}</Text>
        </View>
    </ImageBackground>
);

ServiceScreenHeader.propTypes = {
    text: PropTypes.string,
}

export default ServiceScreenHeader;