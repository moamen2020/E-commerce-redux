import React, { Component } from "react";
import Product from "./Product";
import { connect } from "react-redux";

class ProductList extends Component {
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                  our <strong className="text-blue">proudects</strong>
                </h1>
              </div>
            </div>
            <div className="row">
              {this.props.products.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(ProductList);
