import React, { createContext, useState } from "react";
export const CART = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return <CART.Provider value={{ cart, setCart }}>{children}</CART.Provider>;
};

export default Context;
