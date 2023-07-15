import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import Colors from "../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

export default function Login() {
  WebBrowser.maybeCompleteAuthSession();
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();
  // const { userData, setUserData } = useContext(AuthContext);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "797420240512-up70g52d0r54rh9hehm5k4ttc4bsslos.apps.googleusercontent.com",
    expoClientId:
      "797420240512-7b8ls7sb4rkd01arua3use68cnjafj1k.apps.googleusercontent.com",
  });
  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      console.log(response.authentication.accessToken);
      getUserData();
    }
  }, [response]);

  const getUserData = async () => {
    try {
      const resp = await fetch("https://www.googleapis.com/userinfo/v2/me", {
        headers: {
          Authorization: `Bearer ${response.authentication.accessToken}`,
        },
      });

      const user = await resp.json();
      console.log("user Details", user);
      setUserInfo(user);
      // setUserData(user);
      await Services.setUserAuth(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Image source={require("./../Assets/Images/login.png")} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Вітаємо у вебдодатку КЗ "Харківський ліцей № 140"
        </Text>
        <Text style={styles.authText}>Увійти / Зареєструватися</Text>
        <TouchableOpacity onPress={() => promptAsync()}>
          <LinearGradient
            colors={["#4c669f", "#3b5998", "#192f6a"]}
            style={styles.button}
          >
            <AntDesign
              name="google"
              size={24}
              color="white"
              style={{ marginRight: 10 }}
            />
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              Увійти через Google
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeText: {
    fontSize: 30,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 45,
    marginBottom: 90,
  },
  authText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 15,
  },
});
