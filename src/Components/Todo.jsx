import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="w-full max-w-4xl">
        <Form todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Todo;
