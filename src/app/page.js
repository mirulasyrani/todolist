"use client";
import React from "react";
import Header from "@/components/Header";
import TODOHero from "@/components/TODOHero";
import Form from "@/components/Form";
import TODOList from "@/components/TODOList";

function Home() {
  const [todos, setTodos] = React.useState([]);

  const todos_completed = todos.filter(todo => todo.is_completed).length;
  const total_todos = todos.length;

  return (
    <div className="wrapper">
      <Header />
      <TODOHero
        todos_completed={todos_completed}
        total_todos={total_todos}
      />
      <Form setTodos={setTodos} />
      <TODOList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Home;
