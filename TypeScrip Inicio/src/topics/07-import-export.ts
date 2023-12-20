//Para importar de otras instancias
import { product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: product[] = [
  {
    description: "Nokia",
    price: 200,
  },
  {
    description: "Huawid",
    price: 400,
  },
];

//
const [total, tax] = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
});
