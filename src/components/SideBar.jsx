import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import CustomDrawer from './Drawer/CustomDrawer'
import Dashboard from '../screens/DashBoard/Dashboard'
import { AuthContext } from '../context/AuthProvider'

const Drawer = createDrawerNavigator()

const Avatar = () => {
    const { user } = useContext(AuthContext)
    const { photoURL } = user
    return (
        <View style={{ padding: 10 }}>
            <Image source={{ uri: photoURL }} style={{ width: 35, height: 35, borderRadius: 20 }} />
        </View>
    )
}

const SideBar = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} >
            <Drawer.Screen name='Dashboard' component={Dashboard} options={{
                title: "", headerRight: Avatar
            }} />
            <Drawer.Screen name='Calendar' component={Home} />
        </Drawer.Navigator>
    )
}

export default SideBar
