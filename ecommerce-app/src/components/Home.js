import React from "react";
import CartContainer from "./CartContainer";
import Filters from "./Filters";
import "./style.css";

function Home() {
  return (
    <div className="home">
      <Filters />
      <CartContainer />
    </div>
  );
}

export default Home;
