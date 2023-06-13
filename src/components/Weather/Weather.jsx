import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Location from 'expo-location';
import weatherApi from '../../api/weatherApi';
import styles from './weather.styles';
import { Skeleton } from '@rneui/themed';

const weatherTypes = [
    {
        type: "Clear",
        img: "https://cdn-icons-png.flaticon.com/512/6974/6974833.png",
    },
    {
        type: "Rain",
        img: "https://cdn-icons-png.flaticon.com/512/3351/3351979.png",
    },
    {
        type: "Snow",
        img: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    },
    {
        type: "Clouds",
        img: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    },
    {
        type: "Haze",
        img: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    },
    {
        type: "Smoke",
        img: "https://cdn-icons-png.flaticon.com/512/4380/4380458.png",
    },
    {
        type: "Mist",
        img: "https://cdn-icons-png.flaticon.com/512/4005/4005901.png",
    },
    {
        type: "Drizzle",
        img: "https://cdn-icons-png.flaticon.com/512/3076/3076129.png",
    },

]

{/* <Skeleton
    LinearGradientComponent={LinearGradient}
    animation="wave"
    width={80}
    height={40}
  />  */}

const Weather = () => {
    const [weather, setWeather] = useState({
        weatherType: null,
        temperature: 273.15,
        description: ""
    })
    const [loading, setLoading] = useState(false)

    const handleGetLocation = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            console.log('Location permission denied');
            return;
        }
        const locationData = await Location.getCurrentPositionAsync({});
        return locationData.coords
    }

    const handleGetWeather = async () => {
        setLoading(false)
        const location = await handleGetLocation()
        const res = await weatherApi(location.latitude, location.longitude)
        setWeather({
            weatherType: res.current.weather[0].main,
            temperature: res.current.temp,
            description: res.current.weather[0].description
        })
        setLoading(true)
    }

    useEffect(() => {
        handleGetWeather()
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.card}>
                    <View>
                        {!loading ? <Skeleton
                            // LinearGradientComponent={LinearGradient}
                            animation="wave"
                            width={100}
                            height={20}
                        /> : <Text style={styles.weatherType}>{weather.weatherType}</Text>}
                        {!loading ? <Skeleton
                            animation="wave"
                            width={80}
                            height={10}
                        /> : <Text>{(weather.temperature - 273.15).toFixed()}°C</Text>}

                        {!loading ? <Skeleton
                            animation="wave"
                            width={80}
                            height={10}
                        /> : <Text>{weather.description}</Text>}

                    </View>
                    <View style={styles.image}>
                        {weatherTypes.map(weathers => (
                            weathers.type === weather.weatherType ? (!loading ? <Skeleton
                                animation="wave"
                                width={60}
                                height={50}
                            /> : <Image key={Math.random()} source={{ uri: weathers.img }} style={styles.image} />) : null
                        ))}
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Weather