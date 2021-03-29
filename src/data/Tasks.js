class Task {
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}

export default class TaskList {
    constructor(){
        this.taskList = JSON.parse(localStorage.getItem("todolist_react.taskList"));
        if(!this.taskList)
            this.taskList = [];
        this._subscribers = [];
    }

    //Inscreve as funções que serão notificadas
    subscribe(func){
        this._subscribers.push(func);
    }

    //Desinscreve as funções que serão notificadas
    unsubscribe(func){
        this._subscribers = this._subscribers.filter(s => s !== func);
    }

    //Notifica cada uma das funções inscritas com a lista de tarefas
    notify(){
        this._subscribers.forEach(func => func(this.taskList));
    }

	handleSubmit(title, description) {
        const task = new Task(title, description);
        this.taskList.push(task);
        this.saveTasksOnStorage();
        this.notify();
	}

    saveTasksOnStorage(){
        localStorage.setItem("todolist_react.taskList", JSON.stringify(this.taskList));
    }

	handleDelete(id) {
        this.taskList.splice(id, 1);
        this.saveTasksOnStorage();
        this.notify();
	}
}
