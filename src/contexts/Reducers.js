function getItems() {
  return cartItems;
}

function addItem(item) {
  const newCartItems = [...cartItems, item];
  setCartItems(newCartItems);
  window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  window.alert("已加入商品");
}

function changeItemQuantity(itemIndex, itemQuantity) {
  const newCartItems = cartItems.map((item, index) =>
    index === itemIndex
      ? {
          ...item,
          qty: itemQuantity,
        }
      : item
  );
  setCartItems(newCartItems);
  window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  window.alert("已修改數量");
}

function deleteItem(itemIndex) {
  const newCartItems = cartItems.filter((_, index) => index !== itemIndex);
  setCartItems(newCartItems);
  window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  window.alert("已刪除商品");
}

function clearItems() {
  const newCartItems = [];
  setCartItems(newCartItems);
  window.localStorage.setItem("cartItems", JSON.stringify(newCartItems));
}
