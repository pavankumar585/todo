function Todo({ todo, onChange, onDelete, onUpdate }) {
  return (
    <div>
      <input type="checkbox" onChange={() => onChange(todo)} />
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.text}
      </span>
      <button onClick={() => onUpdate(todo)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
}

export default Todo;
