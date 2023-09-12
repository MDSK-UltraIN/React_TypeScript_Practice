import React, { useState } from "react";

import "./App.css";
import Todos from "./components/Todos";
import Todo from "./Models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodoList((pervTodoList) => {
      return pervTodoList.concat(newTodo);
    });
    
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todoList} />
    </div>
  );
}

export default App;
