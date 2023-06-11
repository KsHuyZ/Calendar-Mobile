import { View, Text } from 'react-native'
import React from 'react'
import Weather from '../../components/Weather/Weather'

const Dashboard = () => {
    return (
        <View>
            <Text>Dashboard</Text>
            <Weather />
        </View>
    )
}

export default Dashboard