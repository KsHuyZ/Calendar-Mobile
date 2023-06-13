import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import userApi from '../../api/userApi'

const DrawerScreen = () => {



    return (
        <>
            <Drawer.Screen name='Dashboard' component={Dashboard} options={options} />
            {calendars.map(calendar => (
                <Drawer.Screen name={calendar.calendarName} component={props => <Home {...props} id={calendar._id} />} options={options} />
            ))}
        </>
    )
}

export default DrawerScreen