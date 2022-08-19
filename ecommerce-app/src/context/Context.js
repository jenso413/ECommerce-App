import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducers";

const Cart = createContext();

function Context({ children }) {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.cats(),
    inStock: Math.floor(Math.random() * 5),
    fastDelivery: faker.datatype.boolean(),
    ratings: Math.ceil(Math.random() * 5),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
