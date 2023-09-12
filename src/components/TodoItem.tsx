import classes from './TodoItem.module.css';

// 影片教學寫法使用 React.FC，目前已不建議使用
// const TodoItem: React.FC<{ text: string }> = (props) => {
//   return <li>{props.text}</li>;
// };

const TodoItem = (props: { text: string, onRemoveTodo:() => void }) => {
  return <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>;
};

export default TodoItem;
