import TodoItem from "./TodoItem";
export default function TodoList(todos) {
  {
    todos.map((item) => <TodoItem key={item} item={item} />);
  }
  {
    todos.map((item) => <TodoItem key={item} item={item} />);
  }
  return <div></div>;
}
