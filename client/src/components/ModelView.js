import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ModelView = ({ setVisible, cart, restaurant, total, setCart }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "flex-end",
      }}
    >
      <Pressable
        style={{ alignSelf: "center", marginBottom: 5 }}
        onPress={() => setVisible(false)}
      >
        <Entypo name="circle-with-cross" size={28} color="black" />
      </Pressable>
      <View
        style={{
          backgroundColor: "white",
          height: 500,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "red",
            fontSize: 16,
            marginTop: 6,
            fontWeight: "600",
          }}
        >
          {restaurant.name}
        </Text>
        {/* time */}
        <View
          style={{
            margin: 10,
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="timer" size={24} color="green" />
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Delivery in {restaurant.time}
          </Text>
        </View>
        <Text style={{ backgroundColor: "grey", height: 1 }}></Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {cart.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  margin: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    color: "red",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  {item.price}
                </Text>
              </View>
            );
          })}
          <Text style={{ backgroundColor: "grey", height: 1 }}></Text>
          <View
            style={{
              margin: 10,
            }}
          >
            <Text>OFFERS</Text>
            <View
              style={{
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
                marginTop: 3,
              }}
            >
              <MaterialCommunityIcons
                name="brightness-percent"
                size={23}
                color="blue"
              />
              <Text>Select a Promo code</Text>
            </View>
          </View>
          <Text style={{ backgroundColor: "grey", height: 1 }}></Text>
          <View style={{}}>
            <Text
              style={{
                marginLeft: 10,
                marginTop: 10,
                fontSize: 17,
                fontWeight: "bold",
              }}
            >
              Climate conscious delivery
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
                marginTop: 5,
                marginLeft: 10,
              }}
            >
              <Ionicons name="fast-food" size={24} color="black" />
              <View>
                <Text style={{ color: "green" }}>
                  Don't send cultery, tissues and straws
                </Text>
                <Text>Thank you for caring about the environment</Text>
              </View>
            </View>
            <Text
              style={{ backgroundColor: "grey", height: 1, marginTop: 7 }}
            ></Text>

            <View
              style={{
                flexDirection: "row",
                gap: 6,
                alignItems: "center",
                marginTop: 5,
                marginLeft: 10,
              }}
            >
              <Entypo name="leaf" size={24} color="green" />
              <Text>
                We fund environment projects to offset carbon {"\n"} footprints
                of our deliveries
              </Text>
            </View>
            <Text
              style={{ backgroundColor: "grey", height: 1, marginTop: 7 }}
            ></Text>
            <View style={{ backgroundColor: "#FDC863", padding: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>Total Items Price</Text>
                <Text>₹{total}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>Delivery Fee</Text>
                <Text>₹50</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>Donation Fee</Text>
                <Text>₹3</Text>
              </View>
            </View>
            {/* grand total */}
          </View>
        </ScrollView>
        <View
          style={{
            margin: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Grand Total</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            ₹{total + 50}
          </Text>
        </View>
        <Pressable
          onPress={() => {
            setVisible(false);
            setCart([]);
            navigation.navigate("order", { restaurant: restaurant });
          }}
          style={{ backgroundColor: "red", padding: 10, alignItems: "center" }}
        >
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Place Order
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ModelView;
