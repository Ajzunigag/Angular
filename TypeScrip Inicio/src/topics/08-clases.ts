export class Person {
  public name: string;
  public addres: string;

  constructor(name: string, addres: string) {
    this.name = name;
    this.addres = addres;
  }
}

const iroman = new Person("Iroman", "Danli");

console.log(iroman);
