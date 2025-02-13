import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Router>
        {/* Header */}
        <Header></Header>
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar></Sidebar>
          {/* Reacr Router - Chat Screen */}
          <Routes>
            <Route path="/room/:roomId" element={<Chat />}></Route>
            <Route path="/" element={<h2>Wellcome</h2>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
