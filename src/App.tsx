import React, { useState } from "react";

import "./App.css";
import Todos from "./components/Todos";
import Todo from "./Models/todo";
import NewTodo from "./components/NewTodo";
import TodoContextProvider from "./store/todo-context";

function App() {
  
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
