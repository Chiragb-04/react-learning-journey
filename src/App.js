import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const input = form.elements.taskName;
    const taskName = input.value.trim();

    if (isDuplicate(taskName)) {
      showAlert("Task already exists.");
      return;
    }

    if (isEmpty(taskName)) {
      showAlert("Task name cannot be empty.");
      return;
    }

    addTask(taskName);
    resetForm(form);
  };

  const isDuplicate = (name) => tasks.includes(name);

  const isEmpty = (name) => name.length === 0;

  const showAlert = (message) => alert(message);

  const addTask = (name) => setTasks([...tasks, name]);

  const resetForm = (form) => form.reset();

  return (
    <div className="App">
      <Header title="ToDo List" />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

function Header({ title }) {
  return <h1>{title}</h1>;
}

function TaskForm({ onAddTask }) {
  return (
    <form onSubmit={onAddTask}>
      <input
        type="text"
        name="taskName"
        placeholder="Enter a task..."
        autoComplete="off"
      />
      <button type="submit">Save</button>
    </form>
  );
}

function TaskList({ tasks }) {
  if (tasks.length === 0) return <p>No tasks added yet.</p>;

  return (
    <div className="outerDiv">
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} name={task} />
        ))}
      </ul>
    </div>
  );
}

function TaskItem({ name }) {
  return (
    <li>
      {name} <span style={{ color: "red", cursor: "pointer" }}>&times;</span>
    </li>
  );
}

export default App;
