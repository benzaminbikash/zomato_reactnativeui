import { View, Text, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const Search = () => {
  return (
    <View
      style={{
        backgroundColor: "#DDDCDD",
        padding: 4,
        flexDirection: "row",
        borderRadius: 6,
        alignItems: "center",
        gap: 5,
      }}
    >
      <AntDesign name="search1" size={20} color="black" />
      <TextInput placeholder="Restaurant name or dishes" />
    </View>
  );
};

export default Search;
