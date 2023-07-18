const baseURL = import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export async function getData(category) {
  const response = await fetch(baseURL + `recipes/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}

/*
export function getData(category = "chicken") {
  return fetch(`../json/${category}.json`)
    .then(convertToJson)
    .then((data) => data);
}
*/

export async function findProductByLabel(label) {
  const response = await fetch(baseURL + `recipe/${label}`);
  const product = await convertToJson(response);
  return product.Result;
}

/*
export async function findProductByLabel(label) {
  const recipes = await getData();
  console.log(recipes);
  return recipes.find((item) => item.label === label);
}
*/