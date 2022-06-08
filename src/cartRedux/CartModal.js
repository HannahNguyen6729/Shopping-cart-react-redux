import React, { Component } from "react";
import { connect } from "react-redux";

class CartModal extends Component {
  renderTblBody = (cartList) => {
    return cartList.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>
          <img
            src={item.img}
            alt={item.name}
            style={{ width: 100, height: 100 }}
          />
        </td>
        <td>
          <button
            className="btn btn-outline-info "
            onClick={() => {
              this.props.changeQuantity(item.id, 1);
            }}
          >
            +
          </button>
          <span className="px-2">{item.quantity}</span>
          <button
            className="btn btn-outline-info"
            onClick={() => {
              this.props.changeQuantity(item.id, -1);
            }}
          >
            -
          </button>
        </td>
        <td>{item.price.toLocaleString()}</td>
        <td>{(item.price * item.quantity).toLocaleString()}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.deleteProduct(item.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };
  renderTotal = (arr) => {
    return arr
      .reduce((total, curr, index) => (total += curr.quantity * curr.price), 0)
      .toLocaleString();
  };

  render() {
    let { cartList } = this.props;
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog col-lg-12" role="document">
          <div
            className="modal-content"
            style={{ minWidth: 950, marginLeft: -200 }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Cart info</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body mb-0 pb-0">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderTblBody(cartList)}</tbody>
                <tfoot>
                  <tr>
                    <th colSpan="5" className="text-right">
                      Total
                    </th>
                    <th>{this.renderTotal(cartList)}</th>
                    <th></th>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartList: state.cart.productList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (id) => {
      let action = {
        type: "DELETE_PRODUCT",
        payload: id,
      };
      dispatch(action);
    },
    changeQuantity: (id, numb) => {
      let action = {
        type: "CHANGE_QUANTITY",
        payload: { id, numb },
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
