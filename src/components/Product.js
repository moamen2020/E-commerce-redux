import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { ADD_CART, DETAILSPRODUCT } from "../reducer/action";

class Product extends Component {
  render() {
    const {  title, img, price } = this.props.product;

    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
        <div className="card">
          <div
            className="img-container p-5"
            // onClick={() => value.handelDetail(id)}
            onClick={() => this.props.details()}
          >
            <Link to="/details">
              <img src={img} alt="Product" className="card-img-top" />
            </Link>
            <button className="cart-btn" onClick={() => this.props.addCart()}>
              <p className="text-capitalize mb-0">in cart</p>
            </button>
          </div>

          {/* cart footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const product = ownProps.product;
  const { id } = ownProps.product;

  return {
    addCart: () => {
      dispatch({ type: ADD_CART, payload: { product } });
    },
    details: () => {
      dispatch({ type: DETAILSPRODUCT, payload: { id } });
    },
  };
};

export default connect(null, mapDispatchToProps)(Product);

const ProductWrapper = styled.div`
  .cart {
    border-color: transparent;
    transition: all 1s linear;
  }

  .cart-footer {
    background: transparent;
    border-top: transparent;
  }

  &:hover {
    .cart {
      border: 0.04rem solid rgba(0, 0, 0, 0.02);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }

    .cart-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.5s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: 0;
    color: var(--mainWite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
