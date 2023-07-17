import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "./App/Context/AuthContext";
import Services from "./App/Shared/Services";

import Login from "./App/Pages/Login";
import Home from "./App/Pages/Home";

export default function App() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    Services.getUserAuth().then((resp) => {
      console.log(resp);
      if (resp) {
        setUserData(resp);
      } else {
        setUserData(null);
      }
    });
  }, []);

  return (
    <View>
      <AuthContext.Provider value={{ userData, setUserData }}>
        {userData ? <Home /> : <Login />}
      </AuthContext.Provider>
    </View>
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
