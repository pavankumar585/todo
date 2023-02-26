import Todo from "./Todo";

function TodoList({ todos, onChange, onDelete, onUpdate }) {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onChange={onChange}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </>
  );
}

export default TodoList;
