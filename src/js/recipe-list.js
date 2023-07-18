import { getParam, loadHeaderFooter } from "./utils.mjs";
import recipeList from "./recipeList.mjs";


loadHeaderFooter();
const category = getParam("category");
recipeList(".recipe-list", "category");

