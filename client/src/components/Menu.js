import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { CART } from "../Context/Context";
const Menu = ({ item, cart, setCart, index }) => {
  const [select, setSelect] = useState(0);
  return (
    <View
      key={index}
      style={{
        marginTop: 10,
        marginLeft: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 7,
      }}
    >
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 8,
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Text style={{ backgroundColor: "#fff", elevation: 3, padding: 4 }}>
            {[0, 0, 0, 0, 0].map((d, i) => {
              return (
                <Entypo
                  key={i}
                  name={i < Math.floor(item.star) ? "star" : "star-outlined"}
                  size={13}
                  color="orange"
                />
              );
            })}
          </Text>
          <Text
            style={{
              backgroundColor: "#F091B1",
              padding: 3,
              fontSize: 13,
              width: 70,
              textAlign: "center",
              color: "white",
            }}
          >
            {item.bestSeller && item.bestSeller} {item.mustTry && item.mustTry}
          </Text>
        </View>
        <View style={{ flexDirection: "row", gap: 10, marginTop: 5 }}>
          <View
            style={{
              borderWidth: 1,
              width: 30,
              height: 30,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="hearto" size={20} color="red" />
          </View>
          <View
            style={{
              borderWidth: 1,
              width: 30,
              height: 30,
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialCommunityIcons
              name="share-outline"
              size={20}
              color="red"
            />
          </View>
        </View>
      </View>
      <View>
        <Image
          source={{ uri: item.image }}
          style={{ width: 100, height: 100, borderRadius: 5 }}
        />
        <View
          style={{
            backgroundColor: "#EA6291",
            flexDirection: "row",
            justifyContent: "space-evenly",
            width: 90,
            borderRadius: 6,
            padding: 3,
            position: "absolute",
            top: 82,
            left: 5,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setCart(cart.filter((d) => d.id != item.id));
              setSelect(Math.max(0, select - 1));
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              -
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              {select}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setCart([...cart, item]);
              setSelect(select + 1);
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Menu;
