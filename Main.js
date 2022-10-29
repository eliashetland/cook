const recipeListEL = document.querySelector("#inputRecipeList");
recipes.forEach((recipe) => {
	recipeListEL.innerHTML += `<option value= "${recipe.title}">`;
});

const submitBtn = document.querySelector("#submitBtn");
const inputField = document.querySelector("#inputField");
const recipeTitle = document.querySelector("#recipeTitle");
const youNeedHeader = document.querySelector("#youNeedHeader");
const descriptionHeader = document.querySelector("#descriptionHeader");
const ingredientsList = document.querySelector("#ingredients");
const descriptionP = document.querySelector("#description");
const showAllEl = document.querySelector("#showAllEl");
const descriptionDiv = document.querySelector("#descriptionDiv");

const showRecipe = (recipeName) => {
	//finds recipeobject in list by searching for the inputfield name in the th objects titles
	let currentRecipe = recipes.find(
		(x) => x.title.toLowerCase() == `${recipeName.toLowerCase()}`
	);
	//clears input
	inputField.value = "";

	//displays recipe if it exists
	if (currentRecipe) {
		youNeedHeader.innerHTML = "Du trenger";
		descriptionHeader.innerHTML = "Beskrivelse";
		recipeTitle.innerHTML =
			currentRecipe.title.charAt(0).toUpperCase() +
			currentRecipe.title.slice(1);
		ingredientsList.innerHTML = "";
		descriptionP.innerHTML = `${currentRecipe.description.replace(
			/\n/g,
			"<br>"
		)}`;

		const quantityDiv = document.querySelector("#quantityDiv"); //<div id="quantityDiv"></>
		quantityDiv.innerHTML = `
											<p>
												Oppskriften gir <div id="inlineBtn"><button id='minus'>-</button>
												<input type='number' value='${currentRecipe.quantity[0]}' id='quantity'></input>
												<button id='plus'>+</button></div>
												<p id='qType'>${currentRecipe.quantity[1]}</p>
											</p>
										`;

		///
		const minus = document.querySelector("#minus"); //minus button
		const plus = document.querySelector("#plus"); //plus button
		const quantity = document.querySelector("#quantity"); //minus button
		////

		const updateQ = () => {
			let ratio = quantity.value / currentRecipe.quantity[0];

			ingredientsList.replaceChildren();
			currentRecipe.ingredients.forEach((ingredient) => {
				let tr = document.createElement("tr");
				///

				let newNum = parseFloat((ingredient[1] * ratio).toFixed(1));

				tr.innerHTML = `<td>${ingredient[0]}:</td><td>${newNum}</td><td>${ingredient[2]}</td>`;
				ingredientsList.appendChild(tr);
			});
		};

		minus.addEventListener("click", () => {
			let x = parseInt(quantity.value);
			if (x >= 2) {
				quantity.value = x - 1;
				updateQ();
			}
		});

		plus.addEventListener("click", () => {
			let x = parseInt(quantity.value);
			quantity.value = x + 1;
			updateQ();
		});

		quantity.addEventListener("change", updateQ);

		currentRecipe.ingredients.forEach((ingredient) => {
			//creates list of ingredients and adds them to ingredients list
			let tr = document.createElement("tr");
			tr.innerHTML = `<td>${ingredient[0]}:</td><td>${ingredient[1]}</td><td>${ingredient[2]}</td>`;
			ingredientsList.appendChild(tr);
		});
	} else {
		inputField.value = "";
	}
};

//when submitbtn is clicked
submitBtn.addEventListener("click", () => {
	showRecipe(inputField.value);
});

inputField.addEventListener("change", () => {
	showRecipe(inputField.value);
});

const createRecomendations = () => {
	inputField.value = "";
	ingredientsList.innerHTML = "";
	descriptionP.innerHTML = "";
	quantityDiv.innerHTML = "";
	youNeedHeader.innerHTML = "Retter";
	descriptionHeader.innerHTML = "";
	recipeTitle.innerHTML = "Elias' kokebok";
	recipes.forEach((recipe) => {
		let tr = document.createElement("tr");
		tr.innerHTML = `<div class="linkRek"><a href="#" onclick="showRecipe('${recipe.title}');return false;">${recipe.title}</a></div>`;
		ingredientsList.appendChild(tr);
	});
};

showAllEl.addEventListener("click", () => {
	createRecomendations();
});

createRecomendations();
