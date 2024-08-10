import React from "react";
import TodoItem from "./TodoItem";
const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4">
      {todos.length > 0 ? (
        todos.map((item, index) => (
          <TodoItem key={index} item={item} todos={todos} setTodos={setTodos} />
        ))
      ) : (
        <p className="text-center text-gray-500">No tasks available</p>
      )}
    </div>
  );
};

export default TodoList;
