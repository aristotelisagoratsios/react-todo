import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

function TodoApp() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todoText) => {
    const newTodo = { id: Date.now(), text: todoText, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleCompleteTodo = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const handleRemoveTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };
  
  return (
    <div className="app">
      <div className="todo-list">
        Todo items goes here
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompleteTodo={handleCompleteTodo}
            onRemoveTodo={handleRemoveTodo}
          />
        ))}
        <TodoForm onAddTodo={handleAddTodo} />
      </div>
    </div>
  );
}

export default TodoApp;
