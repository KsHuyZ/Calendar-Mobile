import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer"
import styles from "./customdrawer.styles"
import logo from "../../assets/logoo.png"
const CustomDrawer = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawer}>
                    <Text style={styles.textLogo}>Schedule Calendar</Text>
                    <Image source={logo} style={styles.logo} />
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 0,
                    left: 0,
                    bottom: 50,
                    backgroundColor: '#f6f6f6',
                    padding: 20,
                }}
            >
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomDrawer