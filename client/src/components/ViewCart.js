import { View, Text, Pressable, Modal } from "react-native";
import React, { useContext, useState } from "react";
import { CART } from "../Context/Context";
import { COLORS } from "../constant/constant";
import ModelView from "./ModelView";

const ViewCart = ({ restaurant }) => {
  const { cart, setCart } = useContext(CART);
  const total = cart
    .map((item, index) => Number(item.price.replace("₹", "")))
    .reduce((pre, curr) => pre + curr, 0);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Modal visible={visible} animationType="slide" transparent>
        <ModelView
          setVisible={setVisible}
          cart={cart}
          restaurant={restaurant}
          total={total}
          setCart={setCart}
        />
      </Modal>
      <View>
        {total === 0 ? null : (
          <Pressable
            onPress={() => setVisible(true)}
            style={{
              padding: 10,
              backgroundColor: COLORS.primary,
              position: "absolute",
              bottom: 30,
              alignSelf: "center",
              borderRadius: 10,
              width: 150,
              alignItems: "center",
              elevation: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              View Cart - ₹{total}
            </Text>
          </Pressable>
        )}
      </View>
    </>
  );
};

export default ViewCart;
