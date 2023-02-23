import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/headFooter/footer";
import Header from "./components/headFooter/header";
import Home from "./components/home/home";
import BlogsPage from "./pages/BlogsPage";
import HomePage from "./pages/HomePage";
import AppTodo from "./projects/todo/TodoApp";
// const AppTodo = Loadable (()=> import ('./projects/todo/TodoApp'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Blogs" element={<BlogsPage />} />
          <Route path="/todo" element={<AppTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
