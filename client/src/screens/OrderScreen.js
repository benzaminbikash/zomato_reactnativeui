import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZE } from "../constant/constant";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const OrderScreen = () => {
  const route = useRoute();
  const data = route.params.restaurant;
  const time = moment().format("LT");
  const [tip, setTip] = useState(0);
  return (
    <View>
      <View
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          borderBottomWidth: 4,
          borderBottomColor: "grey",
        }}
      >
        <Text style={{ fontSize: 18, color: "white", fontWeight: "600" }}>
          {data.name} has accepted your order at {time}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#f906bc",
          flexDirection: "row",
          width: 170,
          margin: 10,
          alignSelf: "center",
          padding: 5,
          alignItems: "center",
          gap: 6,
          borderRadius: 6,
        }}
      >
        <Ionicons name="timer-outline" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 15 }}>
          Delivery in {data.time}s
        </Text>
      </View>
      <Text style={{ textAlign: "center", fontSize: 15, fontWeight: "600" }}>
        Food preparation will begin shorty!!
      </Text>
      <Image
        source={{
          uri: "https://www.pngall.com/wp-content/uploads/2016/03/Food-Free-Download-PNG.png",
        }}
        style={{
          width: SIZE.WIDTH,
          height: 250,
          objectFit: "cover",
          alignSelf: "center",
        }}
      />
      <Text style={{ backgroundColor: "grey", height: 1 }}></Text>
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Ionicons name="md-bicycle-sharp" size={45} color="black" />
        <View>
          <Text
            style={{ color: COLORS.primary, fontSize: 17, fontWeight: "700" }}
          >
            4 valets near the restaurant
          </Text>
          <Text style={{ fontSize: 15 }}>Anyone will pick your order</Text>
        </View>
      </View>
      <Text style={{ backgroundColor: "grey", height: 1 }}></Text>
      <View style={{ margin: 10 }}>
        <View style={{ flexDirection: "row", gap: 5 }}>
          <MaterialCommunityIcons
            name="hand-heart-outline"
            size={24}
            color="red"
          />
          <View>
            <Text style={{ fontSize: 16, fontWeight: "600" }}>
              Tip your hunger saviour
            </Text>
            <Text style={{ fontSize: 15 }}>
              Thank you delivery partner for helping you stay safe indoors.
              Support them through these tough times with a tip.
            </Text>
            {/* for tip */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                onPress={() => setTip(30)}
                style={{
                  backgroundColor: "#d9d9d9",
                  width: 80,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Text>₹30</Text>
              </TouchableOpacity>
              <View>
                <TouchableOpacity
                  onPress={() => setTip(50)}
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: 100,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                >
                  <Text>₹50</Text>
                </TouchableOpacity>
                <Text
                  style={{
                    backgroundColor: COLORS.primary,
                    textAlign: "center",
                    color: "white",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  Most Tipped
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setTip(70)}
                style={{
                  backgroundColor: "#d9d9d9",
                  width: 80,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 10,
                }}
              >
                <Text>₹70</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* for tip showing */}
      {tip ? (
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Please pay ₹{tip} to your delivery agent at the time of delivery!
          </Text>
          <TouchableOpacity onPress={() => setTip(0)}>
            <Text style={{ color: "red", fontWeight: "900" }}>(Cancel)</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default OrderScreen;
