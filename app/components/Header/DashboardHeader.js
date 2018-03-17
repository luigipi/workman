import React from "react";
import PropTypes from 'prop-types';
import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./styles";


const DashboardHeader = ({ text }) => (

    <ImageBackground

        style={styles.dashboardHeaderView}
        resizeMode="contain"
        source={require('./images/tools.jpg')}
    >
        <View >
            <Text style={styles.text}>{text}</Text>
        </View >
    </ImageBackground>

);


DashboardHeader.propTypes = {
    text: PropTypes.string,
}
export default DashboardHeader;