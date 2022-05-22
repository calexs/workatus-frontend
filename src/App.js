import React from "react";
import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Login from "./component/login.component"

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
