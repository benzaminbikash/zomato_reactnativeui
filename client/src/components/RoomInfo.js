import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "../constant/constant";
import { Entypo } from "@expo/vector-icons";
const RoomInfo = ({ data }) => {
  return (
    <View
      style={{
        // marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{data.name}</Text>
        <Text style={{ marginTop: 3 }}>{data.cuisines}</Text>
        <Text style={{ fontSize: 15, color: COLORS.secondary, marginTop: 3 }}>
          {data.smalladress}
        </Text>
      </View>
      <View>
        <View
          style={{
            backgroundColor: "green",
            flexDirection: "row",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 5,
            alignItems: "center",
            gap: 4,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {data.aggregate_rating}
          </Text>
          <Entypo name="star" size={20} color="white" />
        </View>
        <View
          style={{
            backgroundColor: "#F091B1",
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            paddingHorizontal: 10,
            paddingVertical: 5,
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>30</Text>
          <Text style={{ color: "white", fontWeight: "700" }}>Photos</Text>
        </View>
      </View>
    </View>
  );
};

export default RoomInfo;
