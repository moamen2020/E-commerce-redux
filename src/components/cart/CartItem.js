import React, { Component } from "react";
import { ButtonContainer } from "../Button";
import { connect } from "react-redux";
import { HANDEL_DELETE, INCREMENT, DECREMENT } from "../../reducer/action";

class CartItem extends Component {
  render() {
    const { id, title, img, price, total, count } = this.props.item;
    console.log(this.props.state.cart);

    return (
      <div className="row my-5 text-capitalize text-center">
        <div className="clo-10 mx-auto col-lg-2">
          <img
            src={img}
            style={{ width: "5rem", height: "5rem" }}
            className="img-fluid"
            alt="product"
          />
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">product : </span>
          {title}
        </div>
        <div className="col-10 mx-auto col-lg-2">
          <span className="d-lg-none">price : </span>
          {price}
        </div>
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => this.props.decrement(id)}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => this.props.increment(id)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-10 mx-auto col-lg-2">
          <div className="cart-icon" onClick={() => this.props.delete()}>
            <ButtonContainer red>Delete</ButtonContainer>
          </div>
        </div>

        <div className="col-10 mx-auto col-lg-2">
          <strong>item total : $ {total}</strong>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id, count } = ownProps.item;
  return {
    delete: () => {
      dispatch({ type: HANDEL_DELETE, payload: { id } });
    },
    increment: () => {
      dispatch({ type: INCREMENT, payload: { id } });
    },
    decrement: () => {
      dispatch({ type: DECREMENT, payload: { id, count } });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    totalPrice: state.cart.map((item) => {
      item.total = item.price * item.count;
    }),
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
