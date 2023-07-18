import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function WelcomeHeader() {
  const { userData, setUserData } = useContext(AuthContext);
  console.log(userData);
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello</Text>
        <Text style={styles.userName}>{userData?.name}</Text>
      </View>
      <Image source={{ uri: userData?.picture }} style={styles.pictureUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pictureUser: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});
