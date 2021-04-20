export class Task {
	constructor(title, description) {
		this.title = title;
		this.description = description;
	}
}

export default class DataTasks {
	getTasksOnStorage() {
		this.tasksJson = JSON.parse(
			localStorage.getItem("todolist_react.taskList")
		);
		if (this.tasksJson) return this.tasksJson;
		return [];
	}

	saveTasksOnStorage(taskList) {
		localStorage.setItem("todolist_react.taskList", JSON.stringify(taskList));
	}
}
