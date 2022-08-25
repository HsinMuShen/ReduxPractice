import { useState, useReducer, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { Reset } from "styled-reset";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartContext from "./contexts/CartContext";
import PingFangTCRegular from "./fonts/PingFang-TC-Regular-2.otf";
import PingFangTCThin from "./fonts/PingFang-TC-Thin-2.otf";
import NotoSansTCRegular from "./fonts/NotoSansTC-Regular.otf";
import NotoSansTCBold from "./fonts/NotoSansTC-Bold.otf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: PingFangTC;
    src: url(${PingFangTCRegular}) format('opentype');
    font-weight: normal;
  }

  @font-face {
    font-family: PingFangTC;
    src: url(${PingFangTCThin}) format('opentype');
    font-weight: 100;
  }

  @font-face {
    font-family: NotoSansTC;
    src: url(${NotoSansTCRegular}) format('opentype');
    font-weight: normal;
  }

  @font-face {
    font-family: NotoSansTC;
    src: url(${NotoSansTCBold}) format('opentype');
    font-weight: bold;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: NotoSansTC;
  }

  #root {
    min-height: 100vh;
    padding: 140px 0 115px;
    position: relative;

    @media screen and (max-width: 1279px) {
      padding: 102px 0 208px;
    }
  }
`;

const ActionType = {
  GET_ITEM: "GET_ITEM",
  ADD_ITEM: "ADD_ITEM",
  CHANGE_ITEM_QUANTITY: "CHANGE_ITEM_QUANTITY",
  DELETE_ITEM: "DELETE_ITEM",
  CLEAR_ITEM: "CLEAR_ITEM",
};

function reducer(cartItems, action) {
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
}

function init() {
  const initialState = JSON.parse(window.localStorage.getItem("cartItems"));
  return initialState;
}

function App() {
  const [cartItems, dispatch] = useReducer(
    reducer,
    JSON.parse(window.localStorage.getItem("cartItems")) || [],
    init
  );

  function getItems() {
    return cartItems;
  }

  function addItem(item) {
    dispatch({ type: ActionType.ADD_ITEM, payload: { item } });
    window.alert("已加入商品");
  }

  function changeItemQuantity(itemIndex, itemQuantity) {
    dispatch({
      type: ActionType.CHANGE_ITEM_QUANTITY,
      payload: { itemIndex, itemQuantity },
    });
    window.alert("已修改數量");
  }

  function deleteItem(itemIndex) {
    dispatch({
      type: ActionType.DELETE_ITEM,
      payload: { itemIndex: itemIndex },
    });
    window.alert("已刪除商品");
  }

  function clearItems() {
    dispatch({
      type: ActionType.CLEAR_ITEM,
    });
  }

  const cart = {
    getItems,
    addItem,
    changeItemQuantity,
    deleteItem,
    clearItems,
  };

  useEffect(() => {
    window.localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={cart}>
      <Reset />
      <GlobalStyle />
      <Header />
      <Outlet />
      <Footer />
    </CartContext.Provider>
  );
}

export default App;
