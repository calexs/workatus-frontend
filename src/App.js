import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import AuthService from "./services/auth.service";
import Login from "./component/login.component";
import Profile from "./component/profile.component";

function App() {
  return (
    <div className="app">
      {/* <Login /> */}
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
