/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const deliveryFee = 10;
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  const value = {
    products,
    currency,
    deliveryFee,
    showSearch,
    searchText,
    setShowSearch,
    setSearchText,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
