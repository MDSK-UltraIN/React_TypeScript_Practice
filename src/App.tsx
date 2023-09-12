import React, { useState } from "react";

import "./App.css";
import Todos from "./components/Todos";
import Todo from "./Models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodoList((prevTodoList) => {
      return [...prevTodoList, newTodo];
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodoList((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todoList} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
