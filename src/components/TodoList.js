import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event) => setNewTask(event.target.value);

  const handleAddTask = () => {
    const trimmedTask = newTask.trim();
    if (!trimmedTask) return;

    setTodos([...todos, trimmedTask]);
    setNewTask("");
  };

  const handleDeleteTask = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <div className="todo-input">
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((task, index) => (
          <li key={index} className="todo-item">
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              className="delete-button"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
