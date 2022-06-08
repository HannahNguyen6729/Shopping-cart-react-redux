const firstState = {
  productList: [],
};
const cartReducer = (state = firstState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      let index = state.productList.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.productList[index].quantity += 1;
      } else {
        state.productList.push(action.payload);
      }
      state.productList = [...state.productList];
      return { ...state };
    }
    case "DELETE_PRODUCT": {
      let index = state.productList.findIndex(
        (phone) => phone.id === action.payload
      );
      let newList = [...state.productList];
      if (index !== -1) {
        newList.splice(index, 1);
      }
      state.productList = newList;
      return { ...state };
    }
    case "CHANGE_QUANTITY": {
      let index = state.productList.findIndex(
        (item) => item.id === action.payload.id
      );
      let newList = [...state.productList];
      if (index !== -1) {
        if (action.payload.numb === 1) {
          newList[index].quantity += 1;
        } else {
          if (newList[index].quantity > 1) {
            newList[index].quantity -= 1;
          } else {
            newList.splice(index, 1);
            // alert("the quantity must be greater than zero");
          }
        }
      }
      state.productList = newList;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default cartReducer;
