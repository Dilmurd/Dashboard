import React, { useState, useContext } from "react";
import { ItemContext } from "../../context/reducer";

const UpdateItem = ({ item }) => {
  const { updateItem } = useContext(ItemContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);

  const handleUpdate = () => {
    if (newName.trim()) {
      updateItem(item.id, { name: newName });
      setIsEditing(false);
    }
  };

  return isEditing ? (
    <div className="update-item">
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleUpdate}>Save</button>
    </div>
  ) : (
    <button onClick={() => setIsEditing(true)}>Edit</button>
  );
};

export default UpdateItem;
