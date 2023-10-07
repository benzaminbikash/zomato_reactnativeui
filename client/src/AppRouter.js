import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import HotelRoom from "./screens/HotelRoom";
import OrderScreen from "./screens/OrderScreen";

const Stack = createNativeStackNavigator();
const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "none",
          headerShown: false,
        }}
      >
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="hotel" component={HotelRoom} />
        <Stack.Screen name="order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
