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
            {/* Sub-routes under /news */}
          <Route
            exact
            path="/news"
            element={<News pageSize={9} country="us" category="general" />}
          />
          <Route
            exact
            index
            path="/news/Business"
            element={
              <News
                key="business"
                pageSize={9}
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="news/entertainment/"
            element={
              <News
                key="entertainment"
                pageSize={9}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="news/general"
            element={
              <News
                key="general"
                pageSize={9}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="news/health"
            element={
              <News key="health" pageSize={9} country="us" category="health" />
            }
          />
          <Route
            exact
            path="news/science"
            element={
              <News
                key="science"
                pageSize={9}
                country="us"
                category="science"
              />
            }
          />
          <Route
            exact
            path="news/sports"
            element={
              <News key="sports" pageSize={9} country="us" category="sports" />
            }
          />
          <Route
            exact
            path="news/technology"
            element={
              <News
                key="technology"
                pageSize={9}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
