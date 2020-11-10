import React, { Component } from "react";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Details extends Component {
  render() {
    const { company, img, info, price, title } = this.props.ditail;

    return (
      <div className="container py-5">
        {/* Title */}
        <div className="row">
          <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
            <h2>{title}</h2>
          </div>
        </div>
        {/* End Title */}
        {/* Product Info */}
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <img src={img} className="img-fluid" alt="product" />
          </div>
          {/* Product Title */}
          <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
            <h2>model : {title}</h2>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              made by : <span className="text-uppercase">{company}</span>
            </h4>
            <h4 className="text-blue">
              price : <span>$</span>
              {price}
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">
              some info about product:
            </p>
            <p className="text-muted lead">{info}</p>
            {/* Buttons */}
            <div>
              <Link to="/">
                <ButtonContainer>back to products</ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ditail: state.detailsProduct[0],
  };
};

export default connect(mapStateToProps)(Details);
