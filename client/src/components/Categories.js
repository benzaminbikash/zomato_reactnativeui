import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { categoriesdb } from "../db/categoriesdb";
import { COLORS } from "../constant/constant";

const Categories = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categoriesdb}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              style={{
                backgroundColor: COLORS.primary,
                padding: 6,
                marginRight: 10,
                borderRadius: 6,
              }}
            >
              <Text style={{ color: "#fff" }}>{item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Categories;
