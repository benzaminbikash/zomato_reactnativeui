import { View, Text, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constant/constant";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const RoomHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <Pressable
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: "black",
          width: 30,
          height: 30,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="chevron-back-outline" size={24} color="white" />
      </Pressable>
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <Octicons name="bookmark" size={24} color="black" />
        <MaterialCommunityIcons name="share-outline" size={24} color="black" />
      </View>
    </View>
  );
};

export default RoomHeader;
