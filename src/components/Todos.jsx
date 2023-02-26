import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function Todos() {
  const initialValues = JSON.parse(localStorage.getItem("todos")) || [];
  const [todos, setTodos] = useState(initialValues);
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleChange = (todo) => {
    const updatedTodos = [...todos];
    const index = updatedTodos.indexOf(todo);
    updatedTodos[index] = { ...todo };
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleUpdate = (todo) => {
    setInput(todo.text);
    setTodo(todo);
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <TodoForm
        value={input}
        setInput={setInput}
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList
        todos={todos}
        onChange={handleChange}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </>
  );
}

export default Todos;
