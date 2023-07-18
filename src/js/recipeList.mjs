import { getData } from "./productData.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function recipeCardTemplate(recipe) {
  return `<li class="recipe-card">
  <a href="views/recipe.html?recipe=${recipe.label}">
  <img
    src="${recipe.image}"
    alt="Image of ${recipe.label}"
  />
  <h3 class="recipe-card-name">${recipe.label}</h3>
  <h2 class="recipe-card-diet">Diet: ${recipe.dietLabels}</h2>
  <p class="recipe-card-yield">Yield: ${recipe.yield}</p></a>
</li>`
}

/*
function renderRecipeList(recipeList, el) {
  const htmlStrings = recipeList.map(recipeCardTemplate);
  el.insertAdjacentHTML('afterbegin', htmlStrings.join(''));
}*/

export default async function recipeList(selector, category) {
  // get the element we will insert the list into from the selector
  const el = document.querySelector(selector);
  console.log(el);
  // get the list of products
  const recipes = await getData(category);
  console.log(recipes);
  // render out the product list to the element
  renderListWithTemplate(recipeCardTemplate, el, recipes);
  //document.querySelector(".title").innerHTML = category;
}

