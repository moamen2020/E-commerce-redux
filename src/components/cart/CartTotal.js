import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_CART } from "../../reducer/action";

export default function CartTotal() {
  // Use Dispatch
  const dispatch = useDispatch();

  //Use Selector
  const subTotal = useSelector((state) =>
    state.cart.reduce((total, item) => {
      return (total += item.total);
    }, 0)
  );

  const tex = useSelector((state) => state.cartTax * subTotal);

  const total = subTotal + tex;

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <button
            className="btn btn-outline-danger text-uppercase mb-3 px-5"
            type="button"
            onClick={() => dispatch({ type: CLEAR_CART })}
          >
            clear cart
          </button>
          <h5>
            <span className="text-title">subtotal :</span>
            <strong>$ {subTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">tex :</span>
            <strong>$ {tex.toFixed(2)}</strong>
          </h5>
          <h5>
            <span className="text-title">total :</span>
            <strong>$ {total}</strong>
          </h5>
        </div>
      </div>
    </div>
  );
}
