import { findProductByLabel } from "./productData.mjs";
import { setLocalStorage } from "./utils.mjs";

let recipe = {};

export default async function productDetails(productLabel) {
  // get the details for the current product. findProductById will return a promise! use await or .then() to process it
  recipe = await findProductByLabel(productLabel);
  // once we have the product details we can render out the HTML
  renderProductDetails();
  // once the HTML is rendered we can add a listener to Add to Cart button
 // document.getElementById("addToCart").addEventListener("click", addToCart);
}

function addToCart() {
  setLocalStorage("recipe-cart", recipe);
}

function renderProductDetails() {
  document.querySelector("#recipeName").innerText = recipe.label;
  document.querySelector("#recipeDietLabel").innerText = recipe.dietLabels;
  document.querySelector("#recipeYield").innerText = recipe.yield;
  document.querySelector("#recipeImage").src = recipe.image;
  document.querySelector("#recipeImage").alt = recipe.label;

  const str = readLines();

  document.querySelector("#recipeIngredients").innerText = str;

}

function readLines() {
  var ingredList = JSON.stringify(recipe.ingredientLines);
  console.log(ingredList);

  const list = JSON.parse(ingredList);

  let newList = "";
  console.log(list.length);
  for (let i = 0; i < list.length; i++) {
    newList += list[i] + "\n";
    console.log(list[i]);
  }

  return newList;
}

