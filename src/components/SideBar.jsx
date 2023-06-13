import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '../screens/Home'
import CustomDrawer from './Drawer/CustomDrawer'
import Dashboard from '../screens/DashBoard/Dashboard'
import { AuthContext } from '../context/AuthProvider'
import userApi from '../api/userApi'
import DrawerScreen from './DrawerScreen/DrawerScreen'

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



const options = {
    headerRight: Avatar,
}



const SideBar = () => {
    const [calendars, setCalendars] = useState([])

    const { user } = useContext(AuthContext)

    const { getCalendarbyUserId } = userApi

    const handleGetMyCalendar = async () => {
        if (user) {
            const calendars = await getCalendarbyUserId(user._id)
            if (calendars) {
                setCalendars(calendars)
            }
        }
    }


    useEffect(() => {
        handleGetMyCalendar()
    }, [user])
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} >
            <Drawer.Screen name='Dashboard' component={Dashboard} options={options} />
            {calendars.map(calendar => (
                <Drawer.Screen name={calendar.calendarName} options={options} key={Math.random()}>
                    {props => <Home {...props} id={calendar._id} />}
                </Drawer.Screen>
            ))}
        </Drawer.Navigator>
    )
}

export default SideBar
