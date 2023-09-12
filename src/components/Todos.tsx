import Todo from "../Models/todo";
import TodoItem from "./TodoItem";

import classes from './Todos.module.css';

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

const Todos = (props: { items: Todo[] }) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} /> //
      ))}
    </ul>
  );
};

export default Todos;
