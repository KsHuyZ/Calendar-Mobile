import { View, Text } from 'react-native'
import React from 'react'
import Weather from '../../components/Weather/Weather'
import CommingEvent from '../../components/CommingEvent/CommingEvent'

const Dashboard = () => {
    return (
        <View>
            <Weather />
            <CommingEvent />
        </View>
    )
}

export default Dashboard