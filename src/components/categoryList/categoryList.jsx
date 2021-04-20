import React, { Fragment } from "react";
import { Category } from "../../data/Categories";
import CategoryCard from "../categoryCard";

export default function CategoryList({
	categoryList,
	handleCategorySubmit,
	handleCategoryDelete,
	handleCreateCategory,
	handleTaskSubmit,
	handleTaskDelete,
}) {
	function _handleCreateCategory() {
		handleCreateCategory(new Category("", []));
	}

	return (
		<section>
			<ul className="list-category-list">
				{categoryList.map((category, index) => {
					return (
						<CategoryCard
							category={category}
							id={index}
							handleCategorySubmit={handleCategorySubmit}
							handleCategoryDelete={handleCategoryDelete}
							handleTaskSubmit={handleTaskSubmit}
							handleTaskDelete={handleTaskDelete}
						/>
					);
				})}
			</ul>
			<button
				type="button"
				onClick={(event) => {
					event.preventDefault();
					_handleCreateCategory();
				}}
			>
				+
			</button>
		</section>
	);
}
