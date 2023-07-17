import { View, Text, Button } from "react-native";
import React from "react";
import Services from "../Shared/Services";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Home() {
  const { userData, setUserData } = useContext(AuthContext);

  return (
    <View>
      <Button
        title="logout"
        onPress={() => {
          Services.logout();
          setUserData(null);
        }}
      />
    </View>
  );
}
