import React, { Component } from "react";
import CartModal from "./CartModal";
import PhoneList from "./PhoneList";
import { connect } from "react-redux";

class Cart extends Component {
  renderTotalQuantity = (arr) => {
    return arr
      .reduce((total, curr, index) => (total += curr.quantity), 0)
      .toLocaleString();
  };
  render() {
    let { cartList } = this.props;
    return (
      <div className="text-center mb-5">
        <p className="mt-5 display-4">Phone List</p>
        <div
          className="text-right mr-5 mb-2"
          data-toggle="modal"
          data-target="#modelId"
        >
          <button className="btn btn-danger ">
            <i className="fa fa-shopping-cart"></i>(
            {this.renderTotalQuantity(cartList)}) Cart
          </button>
        </div>
        <PhoneList/>
        <CartModal />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartList: state.cart.productList,
  };
};
export default connect(mapStateToProps)(Cart);
