import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import styles from "./customdrawer.styles"
import logo from "../../assets/logoo.png"
const CustomDrawer = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawer}>
                <Text style={styles.textLogo}>Schedule Calendar</Text>
                <Image source={logo} style={styles.logo} />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer