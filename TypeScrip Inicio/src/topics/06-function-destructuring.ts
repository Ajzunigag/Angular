//Para exportar una interfaz
export interface product {
  description: string;
  price: number;
}

const phone: product = {
  description: "Nokia A1",
  price: 200.0,
};

const table: product = {
  description: "Samsung",
  price: 350.0,
};

interface TaxCalculationOptions {
  tax: number;
  products: product[];
}

export function taxCalculation(options: TaxCalculationOptions): number[] {
  let total = 0;
  options.products.forEach((product) => {
    total += product.price;
  });

  return [total, total * options.tax];
}

const shoppingCart = [phone, table];

const tax = 0.15;

const result = taxCalculation({
  products: shoppingCart,
  tax,
});

console.log("Total", result[0]);
console.log("Total", result[1]);

//Desustructuracion

function taxCalculation1({ tax, products }: TaxCalculationOptions): number[] {
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];
}
