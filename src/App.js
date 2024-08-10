import React, { useState } from "react";
import Header from "./Components/Header.jsx";
import Form from "./Components/Form.jsx";
import TodoList from "./Components/TodoList.jsx";

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl flex flex-col items-center">
          <Form todos={todos} setTodos={setTodos} />
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </main>
    </div>
  );
};

export default App;
