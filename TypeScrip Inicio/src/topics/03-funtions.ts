//Funcion Basica
function addNumbers(a: number, b: number) {
  return a + b;
}

addNumbers(1, 2);

//const result: string= addNumbers(1,2);
//Conversion
//const result: string= addNumbers(1,2).toString();

//Funcion de Flecha
const addNumbersArrow = (a: number, b: number) => {
  return a + b;
};

//Funcion de Flecha que regrese un String o cual quier dato
const addNumbersArrow1 = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(firstNumber: number, seconNumber?: number, base: number = 2) {
  return firstNumber * base;
}

//Creando una constante
/*
const result = addNumbers(1, 2);
const result1: number = addNumbersArrow(2, 3);
const result2: string = addNumbersArrow1(4, 5);

const multiplyResult: number = multiply(5);

console.log(result, result2, multiplyResult);
console.log({ result });
console.log({ result1 });
console.log({ result2 });
*/
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 10);

strider.showHp();

export {};
