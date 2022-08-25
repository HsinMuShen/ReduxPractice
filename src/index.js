import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import ThankYou from "./pages/ThankYou/ThankYou";
import Product from "./pages/Product/Product";
import Profile from "./pages/Profile/Profile";
import cartItemsReducer from "./reducers/counter";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(cartItemsReducer);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Product />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="thankyou" element={<ThankYou />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);
