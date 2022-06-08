import React, { Component } from "react";
import { connect } from "react-redux";

class Phone extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card bg-light">
        <div>
          <img
            className="mt-3 img-fluid"
            src={item.img}
            alt={item.name}
          />
        </div>
        <div className="card-body">
          <h5>{item.name}</h5>
          <p className="card-title">Price: {item.price.toLocaleString()}</p>
          <button
            className="btn btn-warning"
            onClick={() => {
              this.props.addProduct(item);
            }}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (phone) => {
      let newPhone = {
        id: phone.id,
        name: phone.name,
        price: phone.price,
        img: phone.img,
        quantity: 1,
      };
      let action = {
        type: "ADD_PRODUCT",
        payload: newPhone,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(Phone);
