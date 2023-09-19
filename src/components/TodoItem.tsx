import classes from './TodoItem.module.css';

// 影片教學寫法使用 React.FC，目前已不建議使用
// const TodoItem: React.FC<{ text: string }> = (props) => {
//   return <li>{props.text}</li>;
// };

interface TodoItemProps {
  text: string
  onRemoveTodo: () => void
}

const TodoItem = ({text, onRemoveTodo}: TodoItemProps) => {
  return <li className={classes.item} onClick={onRemoveTodo}>{text}</li>;
};

export default TodoItem;
