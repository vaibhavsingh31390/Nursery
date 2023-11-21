/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wrapper from "./component/Wrapper";
import Home from "./page/Home";
import Register from "./page/Register";
import Login from "./page/Login";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <Wrapper>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
