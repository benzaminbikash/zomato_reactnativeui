import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import { SIZE } from "../constant/constant";
import ShowImage from "../components/ShowImage";
import SpeacilItem from "../components/SpeacilItem";
import Hotel from "../components/Hotel";
import ViewCart from "../components/ViewCart";
const HomeScreen = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, backgroundColor: "#fff", margin: 10 }}>
          <Search />
          <Categories />
          <ShowImage />
          <SpeacilItem />
          <Hotel />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
