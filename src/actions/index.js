import { ActionType } from "../reducers/counter";

export const addItem = (item) => {
  window.alert("已加入商品");
  return {
    type: ActionType.ADD_ITEM,
    payload: { item },
  };
};

export const changeItemQuantity = (itemIndex, itemQuantity) => {
  window.alert("已修改數量");
  return {
    type: ActionType.CHANGE_ITEM_QUANTITY,
    payload: { itemIndex, itemQuantity },
  };
};

export const deleteItem = (itemIndex) => {
  window.alert("已刪除商品");
  return {
    type: ActionType.DELETE_ITEM,
    payload: { itemIndex: itemIndex },
  };
};

export const clearItems = () => {
  return {
    type: ActionType.CLEAR_ITEM,
  };
};
