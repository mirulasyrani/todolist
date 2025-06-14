export default function Form({ setTodos }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.todo.value.trim();
    if (!value) return;

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        title: value,
        id: self.crypto.randomUUID(),
        is_completed: false,
      },
    ]);
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="todo" placeholder="Add a new task" required />
      <button type="submit">Add</button>
    </form>
  );
}
