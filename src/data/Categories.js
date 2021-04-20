export class Category {
	constructor(title, taskList) {
		this.title = title;
		this.taskList = taskList;
	}
}

export default class DataCategories {
	getCategoriesOnStorage() {
		this.categoriesJson = JSON.parse(
			localStorage.getItem("todolist_react.categoriesList")
		);
		if (this.categoriesJson) return this.categoriesJson;
		return [];
	}

	saveCategoriesOnStorage(categoriesList) {
		localStorage.setItem(
			"todolist_react.categoriesList",
			JSON.stringify(categoriesList)
		);
	}
}
