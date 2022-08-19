import React from "react";
import SingleProduct from "./SingleProduct";
import { CartState } from "../context/Context";

function CartContainer() {
  const {
    state: { products },
  } = CartState();

  console.log(products);

  return (
    <div className="productContainer">
      {products.map((prod) => {
        return <SingleProduct prod={prod} key={prod.id} />;
      })}
    </div>
  );
}

export default CartContainer;
