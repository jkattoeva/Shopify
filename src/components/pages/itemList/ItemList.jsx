import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { categories } from "../../../data/data";
import ItemPage from "../item/Item";

const ItemList = () => {
  const { categoryId } = useParams();
  const items = categories[categoryId].items;
  console.log(items);
  return (
    <div>
      <Outlet />
      {items.map((item, i) => (
        <div key={i + 1}>
          <ItemPage item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
