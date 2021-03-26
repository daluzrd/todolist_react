import React, { Component } from "react";
import RegisterForm from "./components/registerForm/";
import TaskList from "./components/taskList/";
import "./assets/App/style.css";

class App extends Component {
  constructor(){
    super();
    this.tasks = JSON.parse(localStorage.getItem("tasks"));
    
    if(!this.tasks)
      this.tasks = [];
    
    this.state = {
      taskList: this.tasks
    }
  }

  handleSubmit(task){
    const newTaskList = [...this.state.taskList, task];
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
    this.setState({
      taskList: newTaskList
    })
  }

  handleDelete(id){
    const newTaskList = this.state.taskList.filter((task, index) => index !== id);
    localStorage.setItem("tasks", JSON.stringify(newTaskList));
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
        taskList={this.state.taskList} handleDelete={this.handleDelete.bind(this)}></TaskList>
      </div>
    );
  }
}

export default App;
