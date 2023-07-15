import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import Colors from "../Shared/Colors";
import { AntDesign } from "@expo/vector-icons";

export default function Login() {
  return (
    <View>
      <Image source={require("./../Assets/Images/login.png")} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Вітаємо у вебдодатку КЗ "Харківський ліцей № 140"
        </Text>
        <Text style={styles.authText}>Увійти / Зареєструватися</Text>
        <View style={styles.button}>
          <AntDesign
            name="google"
            size={24}
            color="white"
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
            Увійти через Google
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -25,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  welcomeText: {
    fontSize: 40,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textAlign: "center",
    fontWeight: "bold",
    lineHeight: 50,
  },
  authText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});
