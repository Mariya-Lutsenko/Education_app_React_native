import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Services from "../Shared/Services";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import WelcomeHeader from "../Components/WelcomeHeader";
import SearchBar from "../Components/SearchBar";
import Slider from "../Components/Slider";

export default function Home({ categories }) {
  const { userData, setUserData } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <WelcomeHeader />
      <SearchBar />
      <Slider categories={categories} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 35,
  },
});
