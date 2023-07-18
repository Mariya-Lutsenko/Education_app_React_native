import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Services from "../Shared/Services";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import WelcomeHeader from "../Components/WelcomeHeader";
import { createSheet } from "react-native-web/dist/cjs/exports/StyleSheet/dom";

export default function Home() {
  const { userData, setUserData } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <WelcomeHeader />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 35,
  },
});
