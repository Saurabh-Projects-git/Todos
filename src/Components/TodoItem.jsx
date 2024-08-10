import React, { useState } from "react";
const TodoItem = ({ item, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState(item);
  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo !== item));
  };
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleSave = () => {
    if (editedItem.trim() !== "") {
      setTodos(todos.map((todo) => (todo === item ? editedItem : todo)));
      setIsEditing(false);
    }
  };
  const handleCancel = () => {
    setEditedItem(item);
    setIsEditing(false);
  };
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-300">
      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={editedItem}
            onChange={(e) => setEditedItem(e.target.value)}
            className="border border-gray-400 rounded p-1"
          />
        ) : (
          <span className="text-gray-800 text-lg">{item}</span>
        )}
      </div>
      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-300 text-white font-semibold py-1 px-3 rounded hover:bg-green-600 transition duration-300 cursor-pointer"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white font-semibold py-1 px-3 rounded hover:bg-gray-600 transition duration-300 cursor-pointer"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="bg-yellow-300 text-black font-semibold py-1 px-3 rounded hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-yellow-300 text-black font-semibold py-1 px-3 rounded hover:bg-red-600 transition duration-300 cursor-pointer"
            >
              X
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
