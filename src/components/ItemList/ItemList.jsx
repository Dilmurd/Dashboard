import React, { useContext } from "react";
import { ItemContext } from "../../context/reducer";
import UpdateItem from "../Update/Update";
import "./ItemList.css"

const ItemList = () => {
  const { items, deleteItem } = useContext(ItemContext);

  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => deleteItem(item.id)}>Delete</button>
          <UpdateItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
