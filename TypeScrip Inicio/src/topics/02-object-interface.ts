//Es un array pero se especifica que es solo de esting y es una constante por lo que no se puede cambiar
const skills: string[] = ["bash", "Counter", "Healing"];

//La interfaz es que los campos se mantiene en diferentes clases
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; //Con el ? le dice que esta variable es obcional
}

//Se ingresa en la variable la interfaz y se completan las variables
const strider: Character = {
  name: "Strider",
  hp: 100,
  skills: ["Bash", "Counter"],
  hometown: "Danli",
};

//Para llamar a la variable con sus campos
strider.hometown = "Riverdell";

export {};
