import { createContext, useEffect, useState, useContext } from "react";
import NetInfo from "@react-native-community/netinfo";
import { getData, removeItem } from "../utils/storeData";
import authApi from "../api/authApi";
import { NavigationContext } from "@react-navigation/native";
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isConnected, setIsConnected] = useState(true);

  const navigation = useContext(NavigationContext);

  const { authorize } = authApi;

  const handleGetUser = async () => {
    const res = await authorize();
    if (res) {
      setUser(res.user);
      return;
    }
    setUser({});
    removeItem("accessToken");
    return navigation.navigate("Login");
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, isConnected }}>
      {children}
    </AuthContext.Provider>
  );
}
