export const ActionType = {
  GET_ITEM: "GET_ITEM",
  ADD_ITEM: "ADD_ITEM",
  CHANGE_ITEM_QUANTITY: "CHANGE_ITEM_QUANTITY",
  DELETE_ITEM: "DELETE_ITEM",
  CLEAR_ITEM: "CLEAR_ITEM",
};

const cartItemsReducer = (
  cartItems = JSON.parse(window.localStorage.getItem("cartItems")) || [],
  action
) => {
  switch (action.type) {
    case ActionType.ADD_ITEM: {
      const newCartItems = [...cartItems, action.payload.item];
      return newCartItems;
    }
    case ActionType.CHANGE_ITEM_QUANTITY: {
      const newCartItems = cartItems.map((item, index) =>
        index === action.payload.itemIndex
          ? {
              ...item,
              qty: action.payload.itemQuantity,
            }
          : item
      );
      return newCartItems;
    }
    case ActionType.DELETE_ITEM: {
      const newCartItems = cartItems.filter(
        (_, index) => index !== action.payload.itemIndex
      );
      return newCartItems;
    }
    case ActionType.CLEAR_ITEM: {
      const newCartItems = [];
      return newCartItems;
    }
    default:
      return cartItems;
  }
};

export default cartItemsReducer;
