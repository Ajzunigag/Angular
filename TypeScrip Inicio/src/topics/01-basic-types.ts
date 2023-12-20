//Varoables
//let
const name = "Maizon";
//Para que una variable acepte tod tipos de datos
let hpPoints: number | string = 95;
//Solo acepta numeros y la palabra full
let hpPoints2: number | "Full" = 96;

const isAlive: boolean = true;

console.log({
  name,
  hpPoints,
  hpPoints2,
});

hpPoints = "Hola mundo";

export {};
