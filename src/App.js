import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import TodoList from "./components/TodoList";
import HomePage from "./components/Home";
import News from "./components/News";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todolist" element={<TodoList />} />
          <Route
            path="/textform"
            element={<TextForm heading="Enter text to analyze" />}
          />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
