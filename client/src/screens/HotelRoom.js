import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useContext } from "react";
import { useRoute } from "@react-navigation/native";
import RoomHeader from "../components/RoomHeader";
import { COLORS } from "../constant/constant";
import { Entypo } from "@expo/vector-icons";
import RoomInfo from "../components/RoomInfo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RoomIcon from "../components/RoomIcon";
import { Fontisto } from "@expo/vector-icons";
import menu from "../db/menu";
import Menu from "../components/Menu";
import { CART } from "../Context/Context";
import ViewCart from "../components/ViewCart";

const HotelRoom = () => {
  const route = useRoute();
  const data = route.params.item;
  const { cart, setCart } = useContext(CART);
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RoomHeader />
        <RoomInfo data={data} />
        {/* room icon info */}
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          <RoomIcon icon="ios-bicycle" title="MODE" info="Delivery" />
          <RoomIcon icon="time-outline" title="TIME" info="30 mins or free" />
          <View
            style={{
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <View style={{ backgroundColor: "#CCC3C2", padding: 10 }}>
              <MaterialCommunityIcons
                name="brightness-percent"
                size={23}
                color="blue"
              />
            </View>
            <View>
              <Text>OFFERS</Text>
              <Text>View All</Text>
            </View>
          </View>
        </View>
        {/* box info */}
        <View
          style={{
            marginTop: 12,
            marginHorizontal: 10,
            flexDirection: "row",
            gap: 7,
            alignItems: "center",
            padding: 6,
            backgroundColor: "#CCC3C2",
            borderRadius: 6,
          }}
        >
          <Fontisto name="motorcycle" size={24} color="black" />
          <Text>₹30 additional distance fee</Text>
        </View>
        {/* for menu */}
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Full Menu</Text>
          <Text
            style={{ backgroundColor: "#CF577E", height: 4, width: 70 }}
          ></Text>
          {menu.map((item, index) => {
            return (
              <Menu item={item} cart={cart} setCart={setCart} index={index} />
            );
          })}
        </View>
      </ScrollView>
      <ViewCart restaurant={data} />
    </>
  );
};

export default HotelRoom;
