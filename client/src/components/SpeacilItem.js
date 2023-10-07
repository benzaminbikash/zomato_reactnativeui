import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { specialdb } from "../db/specialdb";

const SpeacilItem = () => {
  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: "900", marginTop: 7 }}>
        Special Food
      </Text>
      <FlatList
        horizontal
        data={specialdb}
        renderItem={({ item }) => {
          return (
            <View style={{ marginRight: 20, marginTop: 5 }}>
              <Image
                source={{ uri: item.image }}
                style={{
                  width: 70,
                  height: 70,
                  borderRadius: 100,
                  objectFit: "contain",
                }}
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: "700",
                  marginTop: 5,
                }}
              >
                {item.name}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SpeacilItem;
