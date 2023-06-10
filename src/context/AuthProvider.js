import { createContext, useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { getData } from "../utils/storeData";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isConnected, setIsConnected] = useState(true);
  

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  return (
    <AuthContext.Provider value={{ user, setUser, isConnected }}>
      {children}
    </AuthContext.Provider>
  );
}
