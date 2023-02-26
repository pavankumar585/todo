function Todo({ todo, onChange, onDelete, onUpdate }) {
  return (
    <div>
      <input type="checkbox" onChange={() => onChange(todo)} />
      {!todo.completed ? (
        <span>{todo.text}</span>
      ) : (
        <span style={{ textDecoration: "line-through" }}>{todo.text}</span>
      )}
      <button onClick={() => onUpdate(todo)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default Todo;
