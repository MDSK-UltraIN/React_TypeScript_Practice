import React, { useState } from "react";
import Todo from "../Models/todo";

type TodoContextObject = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

interface TodoContextProviderProps {
  children: React.ReactNode;
}

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {

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

  const contextValue: TodoContextObject = {
    items: todoList,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  useState();

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
