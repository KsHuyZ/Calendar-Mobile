import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import Logo from "../../assets/logoo.png"
import styles from './splash.styles'
import { getData } from '../../utils/storeData'
import * as Progress from 'react-native-progress';

const Splash = ({ navigation }) => {

    const handleCheckToken = async () => {
        const isLogin = await getData("accessToken");
        if (isLogin) {
            return navigation.navigate('Sidebar')
        }
        return navigation.navigate("Login")
    };

    useEffect(() => {
        handleCheckToken()
    }, [])

    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Progress.Bar width={150} animated indeterminate/>
        </View>
    )
}

export default Splash