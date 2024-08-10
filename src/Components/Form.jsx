import React, { useState } from "react";
const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  return (
    <form
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mb-4 flex flex-col space-y-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        Add a New Task
      </h2>
      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <input
          type="text"
          value={todo}
          onChange={handleChange}
          placeholder="Enter task here..."
          className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="mt-2 sm:mt-0 px-4 py-2 bg-yellow-300 text-black font-semibold rounded-md hover:bg-yellow-600 transition duration-300"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Form;
