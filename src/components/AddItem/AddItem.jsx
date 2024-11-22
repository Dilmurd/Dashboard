import React, { useState, useContext } from "react";
import { ItemContext } from "../../context/reducer";
import "./AddItem.css"

const AddItem = () => {
  const { addItem } = useContext(ItemContext);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addItem({ name });
      setName("");
    }
  };

  return (
    <form className="add-item" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add an item..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddItem;
