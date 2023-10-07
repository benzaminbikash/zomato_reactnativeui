import { View, Text, Image, ImageBackground } from "react-native";
import React from "react";
import { SIZE } from "../constant/constant";

const ShowImage = () => {
  return (
    <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
      <ImageBackground
        source={{
          uri: "https://cdn.pixabay.com/photo/2018/10/14/18/29/meatloaf-3747129_640.jpg",
        }}
        style={{ width: SIZE.WIDTH / 2 - 15, height: 120 }}
        borderRadius={5}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            position: "absolute",
            bottom: 7,
            left: 10,
          }}
        >
          20% OFF
        </Text>
      </ImageBackground>
      <ImageBackground
        source={{
          uri: "https://cdn.pixabay.com/photo/2018/09/15/10/36/vegetables-3679075_640.jpg",
        }}
        style={{ width: SIZE.WIDTH / 2 - 15, height: 120 }}
        borderRadius={5}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "900",
            position: "absolute",
            bottom: 7,
            left: 10,
          }}
        >
          Zomato
        </Text>
      </ImageBackground>
    </View>
  );
};

export default ShowImage;
