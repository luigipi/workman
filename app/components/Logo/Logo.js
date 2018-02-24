import React from "react";
import styles from "./styles";
import { TouchableWithoutFeedback, Image } from "react-native";

const Logo = () => (
    <TouchableWithoutFeedback>
        <Image
            resizeMode="contain"
            source={require('./images/logo1.png')}
            style={styles.logo}
        />
    </TouchableWithoutFeedback>
);

export default Logo;