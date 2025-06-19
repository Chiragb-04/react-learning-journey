import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import TodoList from "./components/TodoList";
import HomePage from "./components/Home";
import News from "./components/News";
import UserData from "./components/UserData";
import AddUser from "./components/AddUser";

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
          <Route path="/userData" element={<UserData />} />
          <Route path="/userData/add" element={<AddUser />} />

          {/* Sub-routes under /news */}
          <Route 
            path="/news" 
            element={<News />} />
          <Route
            path="/news/business"
            element={<News key="business" category="business" />}
          />
          <Route
            path="/news/entertainment"
            element={<News key="entertainment" category="entertainment" />}
          />
          <Route
            path="/news/general"
            element={<News key="general" category="general" />}
          />
          <Route
            path="/news/health"
            element={<News key="health" category="health" />}
          />
          <Route
            path="/news/science"
            element={<News key="science" category="science" />}
          />
          <Route
            path="/news/sports"
            element={<News key="sports" category="sports" />}
          />
          <Route
            path="/news/technology"
            element={<News key="technology" category="technology" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
