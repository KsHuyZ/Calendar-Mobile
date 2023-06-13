import React, { useEffect, useState } from 'react'
import { TouchableOpacity, Text, Image, View, TextInput, ActivityIndicator } from "react-native";
import styles from "./login.style"
import Icon from "react-native-vector-icons/Feather"
import Google from "react-native-vector-icons/AntDesign"
import authApi from '../../api/authApi';
import { getData } from '../../utils/storeData';


const EyeIcon = ({ onPress, show }) => (
    <TouchableOpacity onPress={onPress} style={{ position: "absolute", right: 15, bottom: 38 }}>
        {!show ? <Icon name="eye" size={20} color="#666" /> : <Icon name="eye-off" size={20} color="#666" />}
    </TouchableOpacity>
);

const Login = ({ navigation }) => {

    const [focus, setFocus] = useState({
        email: false,
        password: false
    })
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formValue, setFormValue] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({
        email: "",
        password: ""
    })
    const [isLogin, setIsLogin] = useState(false);

   


    const { login } = authApi

    const handleFocus = (name) => {
        if (name === "email") return setFocus({ email: true, password: false })
        setFocus({ email: false, password: true })
    }

    const handleChangeInput = (name, value) => {
        setFormValue((prev) => ({ ...prev, [name]: value }))
    }

    const handleLogin = async () => {
        const { email, password } = formValue
        if (email === "") return setError((prev) => ({ ...prev, email: "Please enter email" }))
        if (email !== "") setError((prev) => ({ ...prev, email: "" }))
        if (password === "") return setError((prev) => ({ ...prev, password: "Please enter password" }))
        if (password !== "") setError((prev) => ({ ...prev, password: "" }))
        setLoading(true)
        const res = await login(email, password)
        setLoading(false)
        if (res?.user) {
            // setUser(res)
            return navigation.navigate('Sidebar')
        }
        if (res === "user_not_exist") return setError({ ...error, email: "User not exits" })
        if (res === "wrong_password") return setError({ ...error, password: "Wrong Password" })
        if (res === "Pls_active_acc") return setError({ ...error, password: "Wrong Password" })

    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainHeader}>Welcome to my schedule</Text>
            <View style={styles.formInput}>
                <View>
                    <TextInput style={[styles.textInput, focus.email ? styles.inputFocus : null, error.email !== "" ? styles.inutError : null]} placeholder='Type email' onFocus={() => handleFocus("email")} keyboardType='email-address' value={formValue.email} onChangeText={(value) => handleChangeInput("email", value)} />
                    <Text style={{ lineHeight: 20, color: "#c54837" }}>{error.email}</Text>
                </View>
                <View style={{ position: "relative" }}>
                    <TextInput style={[styles.textInput, focus.password ? styles.inputFocus : null, error.password !== "" ? styles.inutError : null]} placeholder='Type passwrod' onFocus={() => handleFocus("password")} secureTextEntry={!showPassword} value={formValue.password} onChangeText={(value) => handleChangeInput("password", value)} />
                    <EyeIcon onPress={() => setShowPassword(prev => !prev)} show={showPassword} />
                    <Text style={{ height: 20, color: "#c54837" }}>{error.password}</Text>
                </View>

                <TouchableOpacity style={[styles.buttonStyle, loading ? styles.disabled : null]} onPress={handleLogin} disabled={loading}>
                    {!loading ? <Text style={styles.buttonText}>Login</Text> : <ActivityIndicator size={"small"} color={"#fff"} />}
                </TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Text >Have Account?</Text><TouchableOpacity>
                        <Text style={{ color: "#119744", marginLeft: 5 }}>Register Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line}>
                    <Text style={styles.or} >Or</Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.googleSignin} >
                        <Text style={{ padding: 15, textAlign: "center", color: "#fff" }}><Google name='google' size={20} /> Sign In With Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default Login
