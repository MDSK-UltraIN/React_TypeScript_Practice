import { useRef, useContext } from "react";
import { TodosContext } from "../store/todo-context";

import classes from './NewTodo.module.css';

const NewTodo = () => {
  const todosCTX = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCTX.addTodo(enteredText);

    const inputElement = todoTextInputRef.current;
    inputElement!.value = '';

  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
