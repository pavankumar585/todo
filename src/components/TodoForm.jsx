function TodoForm({ value, setInput, todo, setTodo, todos, setTodos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    value = value.trim();
    if (!value) return;

    if (todo.id) {
      const updatedTodos = [...todos];
      const index = updatedTodos.indexOf(todo);
      updatedTodos[index] = { ...todo, text: value };
      setTodos(updatedTodos);
      setInput("");
      setTodo({});
      return;
    }

    const newTodo = { id: Date.now(), text: value, completed: false };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setInput(e.target.value)}
      />
      {!todo.id ? <button>Add</button> : <button>Ok</button>}
    </form>
  );
}

export default TodoForm;
