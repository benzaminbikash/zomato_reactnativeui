import { View, ScrollView } from "react-native";
import React from "react";
import Search from "../components/Search";
import Categories from "../components/Categories";
import ShowImage from "../components/ShowImage";
import SpeacilItem from "../components/SpeacilItem";
import Hotel from "../components/Hotel";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1, backgroundColor: "#fff", margin: 10 }}>
            <Search />
            <Categories />
            <ShowImage />
            <SpeacilItem />
            <Hotel />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
