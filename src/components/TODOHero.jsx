export default function TODOHero({ todos_completed, total_todos }) {
  return (
    <section className="todo-hero">
      <h2>Todos Summary</h2>
      <p>Completed: {todos_completed}</p>
      <p>Total: {total_todos}</p>
    </section>
  );
}
