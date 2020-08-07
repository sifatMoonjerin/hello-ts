// basic types

const userName: string = "Sifat";
const age: number = 25;
const isMarried: boolean = false;

const sayHello: (name: string) => void = (name) => {
  console.log(`Hello, ${name}`);
};

sayHello(userName);

// union types
const uid: (string | number)[] = [];
let answer: string | number;

answer = "ok";
answer = 234;


// object 

let something: {name:string}
something = {name: 'sifat'}
console.log(something)
