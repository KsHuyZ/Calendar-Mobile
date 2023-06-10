import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'

const Drawer = createDrawerNavigator()

const SideBar = () => {
    return (
        // <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={Home}></Drawer.Screen>
            </Drawer.Navigator>
        // </NavigationContainer>
    )
}

export default SideBar

const styles = StyleSheet.create({})