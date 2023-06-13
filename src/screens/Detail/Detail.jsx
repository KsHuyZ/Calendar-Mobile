import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from './detail.styles'
import Close from "react-native-vector-icons/AntDesign"
import Pen from "react-native-vector-icons/MaterialCommunityIcons"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Detail = ({ route }) => {
    const { _id, backgroundColor, title, description, createdBy, location, isMeeting, file } = route.params
    const navigation = useNavigation();

    const handleGoBack = () => {
        return navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Close name='close' size={30} />
                </TouchableOpacity>

                <View style={styles.rightSide}>
                    <TouchableOpacity>
                        <Pen name="pencil-outline" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='more-horizontal' size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.detail}>
                <View style={styles.row}>
                    <View style={{ backgroundColor, width: 20, height: 20, borderRadius: 7 }} />
                    <View style={styles.right}>
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View >
                        <MaterialIcons name='description' size={20} />
                    </View>
                    <View style={styles.right}>
                        <Text>{description}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View >
                        <Feather name='user' size={20} />
                    </View>
                    <View style={styles.right}>
                        <Text>{createdBy.userName}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View >
                        <Ionicons name='location-sharp' size={20} />
                    </View>
                    <View style={styles.right}>
                        <Text>{location.address}</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View >
                        <Feather name='video' size={20} />
                    </View>
                    <View style={styles.right}>
                        <Button title='Join Metting' />
                    </View>
                </View>
                <View style={styles.row}>
                    <View >
                        <FontAwesome name='file-o' size={20} />
                    </View>
                    <View style={styles.right}>
                        <Text>{file.fileName}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Detail