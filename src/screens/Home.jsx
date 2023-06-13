import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Calendar from "react-native-big-calendar";
import eventApi from '../api/eventApi';
import { AuthContext } from '../context/AuthProvider';
import socket from "../config/socket";
import { useNavigation } from '@react-navigation/native';


const now = () => new Date();

const Home = (props) => {
    const { id } = props
    const { getEventbyCalendarId } = eventApi
    const { user } = useContext(AuthContext)
    const [date, setDate] = useState(now())
    const [allEvents, setAllEvents] = useState([])
    const [view, setView] = useState("month")

    const navigation = useNavigation();

    const eventStyleGetter = (event, start, end, isSelected) => {
        var backgroundColor = event?.backgroundColor;
        const color = backgroundColor?.startsWith("#f") ? "black" : "white";
        console.log(backgroundColor)
        return {
            backgroundColor: backgroundColor,
            color,
            // boxShadow:
            //     "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        };

    };

    const handleGetEventbyCalendarId = async () => {
        const year = date.getFullYear();
        if (user) {
            const res = await getEventbyCalendarId(id, year, user._id)
            if (res?.success) {
                setAllEvents(res.events)
            }
        }

    }

    const handleClickEvent = async (event) => {
        navigation.navigate('Detail', event);
    }
    useEffect(() => {
        handleGetEventbyCalendarId()
    }, [user])

    return (
        <Calendar events={allEvents} height={500} eventCellStyle={eventStyleGetter} mode={'week'} onPressEvent={handleClickEvent} />
    )
}

export default Home
