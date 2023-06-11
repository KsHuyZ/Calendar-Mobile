import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SideBar from "./src/components/SideBar";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Auth/Login";
import AuthProvider, { AuthContext } from "./src/context/AuthProvider";
import ToastManager, { Toast } from "toastify-react-native";
import "./src/config/firebase";
import { useContext, useEffect, useState } from "react";
import { getData } from "./src/utils/storeData";
import Splash from "./src/screens/Splash/Splash";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <ToastManager />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"Splash"}
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Sidebar" component={SideBar} />
        
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
