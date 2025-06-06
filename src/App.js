import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import TodoList from './components/TodoList';
import HomePage from './components/Home';

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
    <Router> 
      <Navbar />
      <div className="container my-3">
        <Routes>
           <Route path="/" element={<HomePage />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route path="/textform" element={<TextForm heading="Enter text to analyze" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
