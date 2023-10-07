import { View, Text, FlatList, Image, Pressable } from "react-native";
import React from "react";
import { hotels } from "../db/hotel";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constant/constant";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Hotel = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 5 }}>
      {hotels.map((item) => {
        return (
          <Pressable
            key={item.id}
            onPress={() => navigation.navigate("hotel", { item: item })}
          >
            <Image
              source={{ uri: item.featured_image }}
              style={{
                width: "100%",
                height: 230,
                marginTop: 10,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            {/* for time */}
            <View
              style={{
                position: "absolute",
                right: 10,
                top: 170,
                backgroundColor: "white",
                padding: 5,
                flexDirection: "row",
                gap: 2,
                borderRadius: 4,
              }}
            >
              <Ionicons name="time-outline" size={20} color="black" />
              <Text>{item.time}</Text>
            </View>
            {/* for off */}
            <View
              style={{
                position: "absolute",
                left: 10,
                top: 170,
                backgroundColor: "#20A9E7",
                padding: 5,
                borderRadius: 4,
              }}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
              >
                {item.offer}
              </Text>
            </View>
            <View
              style={{ backgroundColor: "white", padding: 10, elevation: 10 }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {item.name}
                  </Text>
                  <Text style={{ color: "grey" }}>{item.cuisines}</Text>
                </View>
                <View
                  style={{
                    backgroundColor: "green",
                    flexDirection: "row",
                    gap: 2,
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderRadius: 10,
                    height: 30,
                  }}
                >
                  <Text style={{ color: "white" }}>
                    {item.aggregate_rating}
                  </Text>
                  <Entypo name="star" size={18} color="white" />
                </View>
              </View>
              <View
                style={{
                  height: 1,
                  backgroundColor: "grey",
                  marginVertical: 6,
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 7,
                  }}
                >
                  <View
                    style={{
                      width: 30,
                      height: 30,
                      backgroundColor: "#20A9E7",
                      borderRadius: 50,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AntDesign name="doubleright" size={20} color="white" />
                  </View>
                  <Text>1500+ orders placed here</Text>
                </View>
                <View>
                  <Text style={{ fontSize: 10, fontWeight: "900" }}>
                    MAX SECURITY
                  </Text>
                  <Text style={{ fontSize: 10, fontWeight: "900" }}>
                    DELEVERY
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Hotel;
