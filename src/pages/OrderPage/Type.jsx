import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "./Products";

function Type({ orderType }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems(orderType);
  }, [orderType]);

  const loadItems = async (orderType) => {
    try {
      let response = await axios.get(`http://localhost:4000/${orderType}`);
      setItems(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ItemComponent = orderType === "products" ? Products : null;

  const optionItems = items.map((item) => {
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />;
  });

  return <div>{optionItems}</div>;
}

export default Type;
