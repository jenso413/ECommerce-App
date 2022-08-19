import React from "react";
import { CartState } from "../context/Context";
import { ListGroup } from "react-bootstrap";

function Cart() {
  const {
    state: { cart },
  } = CartState();

  return (
    <div className="home">
      <div className="product-container">
        <ListGroup>
          {cart.map((prod) => (
            <span>{prod.name}</span>
          ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Cart;
