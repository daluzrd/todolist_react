import React, { Component } from "react";
import RegisterForm from "./components/registerForm/";
import TaskList from "./components/taskList/";
import "./assets/App/style.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      taskList: []
    }
  }

  handleSubmit(task){
    const newTaskList = this.state.taskList;
    newTaskList.push(task);    
    this.setState({
      taskList: newTaskList
    })
  }

  render() {
    return (
      <div className="App">
        <RegisterForm className="register-form" 
        handleSubmit={this.handleSubmit.bind(this)}></RegisterForm>
        <TaskList className="task-list"
        taskList={this.state.taskList}></TaskList>
      </div>
    );
  }
}

export default App;
