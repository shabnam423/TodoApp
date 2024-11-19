import { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  return (
    <div>
      <Form todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}