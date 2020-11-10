import React from "react";
import CartItem from "./CartItem";

export default function EmplyCart({ value }) {
  const { cart } = value;
  console.log(cart);
  return (
    <div className="container-fluid">
      {cart.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </div>
  );
}
