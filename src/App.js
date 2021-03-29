import React, { Component } from "react";
import RegisterForm from "./components/registerForm/";
import TaskList from "./components/taskList/";
import Tasks from "./data/Tasks.js";
import "./assets/App/style.css";

class App extends Component {
  constructor(){
    super();
    this.tasks = new Tasks();
  }

  render() {
    return (
      <div className="App">
        <RegisterForm className="register-form" 
        handleSubmit={this.tasks.handleSubmit.bind(this.tasks)}></RegisterForm>
        <TaskList className="task-list"
        tasks={this.tasks}></TaskList>
      </div>
    );
  }
}

export default App;
