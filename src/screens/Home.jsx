import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calendar from "react-native-big-calendar";
const events = [
    {
        title: "Meeting",
        start: new Date(2023, 3, 24, 10, 0),
        end: new Date(2023, 3, 30, 10, 30),
    },
    {
        title: "Coffee break",
        start: new Date(2020, 1, 11, 15, 45),
        end: new Date(2020, 1, 11, 16, 30),
    },
];
const Home = () => {
    return (

        <Calendar events={events} height={500} />


    )
}

export default Home

const styles = StyleSheet.create({})