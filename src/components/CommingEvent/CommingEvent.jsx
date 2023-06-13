import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import eventAttenteeApi from '../../api/eventAttente'
import { AuthContext } from '../../context/AuthProvider'
import * as Progress from 'react-native-progress';
import styles from './commingEvent.styles'
import dayjs from 'dayjs'

const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length === 0
}

const CommingEvent = () => {

    const { user } = useContext(AuthContext)

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(false)
    const { getCommingEvents } = eventAttenteeApi

    const handleGetCommingEvents = async () => {
        setLoading(true)
        const data = await getCommingEvents(user._id)
        setEvents(data.events)
        setLoading(false)
    }

    useEffect(() => {
        if (!isObjectEmpty(user)) {
            handleGetCommingEvents()
        }
    }, [user])

    return (
        <View>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>Up Comming Events</Text>
            {events.length > 0 && !loading ? events.map(event => (
                <View style={styles.card} key={Math.random()}>
                    <View style={styles.colorTime}>
                        <View style={{
                            width: 10,
                            height: 10,
                            borderRadius: 30,
                            marginRight: 20,
                            backgroundColor: event.backgroundColor
                        }}></View>
                        <View>
                            <Text>
                                {dayjs(event.start).isSame(dayjs(event.end).subtract(1, 'day')) ? dayjs(event.start).format("DD/MM/YYYY") : `${dayjs(event.start).format("DD/MM/YYYY")} - ${dayjs(event.end).format("DD/MM/YYYY")} `}
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 20 }}>{event.title}</Text>
                    </View>
                </View>
            )) : (!loading && events.length === 0 ? <Text>You don't have any upcoming events</Text> : (loading ? <Progress.CircleSnail color={['red', 'green', 'blue']} /> : null))}

        </View>
    )
}

export default CommingEvent