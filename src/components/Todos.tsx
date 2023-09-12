import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todo-context";

import classes from "./Todos.module.css";

// 影片教學寫法使用 React.FC，目前已不建議使用
// const Todos: React.FC<{ items: Todo[] }> = (props) => {
//   return (
//     <ul>
//       {props.items.map((item) => (
//         <TodoItem key={item.id} text={item.text} /> //
//       ))}
//     </ul>
//   );
// };

const Todos = () => {
  const todosCTX = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCTX.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCTX.removeTodo.bind(null, item.id)}
        /> //
      ))}
    </ul>
  );
};

export default Todos;
