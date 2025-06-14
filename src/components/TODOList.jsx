export default function TODOList({ todos, setTodos }) {
  return (
    <ol className="todo_list">
      {todos && todos.length > 0 ? (
        todos.map((item, index) => (
          <Item key={index} item={item} setTodos={setTodos} />
        ))
      ) : (
        <p>Seems lonely in here, what are you up to?</p>
      )}
    </ol>
  );
}

function Item({ item, setTodos }) {
  const completeTodo = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === item.id
          ? { ...todo, is_completed: !todo.is_completed }
          : todo
      )
    );
  };

  return (
    <li id={item.id} className="todo_item">
      <button className="todo_items_left" onClick={completeTodo}>
        <svg fill={item.is_completed ? "#22C55E" : "#0d0d0d"} width="24" height="24">
          <circle cx="11.998" cy="11.998" r="9.998" />
        </svg>
        <p style={item.is_completed ? { textDecoration: "line-through" } : {}}>
          {item.title}
        </p>
      </button>
      <div className="todo_items_right">
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </li>
  );
}
