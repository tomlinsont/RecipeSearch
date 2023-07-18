import { getParam } from "./utils.mjs";
import productDetails from "./productDetails.mjs";

const productLabel = getParam("recipe");

productDetails(productLabel);
