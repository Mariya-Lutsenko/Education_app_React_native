import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from "react-native";

import React from "react";
import Colors from "../Shared/Colors";

export default function Slider({ categories }) {
  const slider = categories;

  //   const resp = categories.map((item) => ({
  //     id: item.id,
  //     image: item.image,
  //     name: item.name,
  //   }));
  //   console.log(resp);
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.categ}>
            <TouchableOpacity style={styles.button}>
              <Text>{item.name}</Text>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: Dimensions.get("screen").width * 0.8,
                  height: 150,
                  borderRadius: 10,
                  marginRight: 15,
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 35,
    marginTop: 4,
  },

  scrol: {
    overflow: "visible",
    display: "flex",
    flexDirection: "row",

    marginRight: 4,
  },
  categ: {
    marginRight: 4,
  },
  button: {
    padding: 5,
    borderRadius: 5,
    width: Dimensions.get("screen").width * 0.87,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderColor: "#D3D3D6",
    borderWidth: 2,
  },
  pictureCategory: {
    width: 45,
    height: 45,
  },
});
