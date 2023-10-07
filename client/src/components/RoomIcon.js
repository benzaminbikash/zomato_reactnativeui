import { View, Text } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const RoomIcon = ({ title, info, icon }) => {
  return (
    <View style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
      <View style={{ backgroundColor: "#CCC3C2", padding: 10 }}>
        <Ionicons name={icon} size={23} color="black" />
      </View>
      <View>
        <Text>{title}</Text>
        <Text>{info}</Text>
      </View>
    </View>
  );
};

export default RoomIcon;
