import React, { Component } from "react";
import CartColums from "./CartColums";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    return (
      <section>
        {this.props.state.cart.length > 0 ? (
          <>
            <div className="col-10 mx-auto text-center text-title text-slanted text-blue my-5">
              <h2>Your Cart </h2>
            </div>
            <CartColums />
            <CartList value={this.props.state} />
            <CartTotal />
          </>
        ) : (
          <EmptyCart />
        )}
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps)(Cart);
