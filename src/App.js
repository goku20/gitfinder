import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem ";
import "./axios.css";
import "./App.css";

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
