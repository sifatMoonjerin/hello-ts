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


// functions

const minus = (a: number, b: number, c: number = 0): string => {
  console.log(a-b)
  return c.toString()
}

let res: string = minus(7,5);
console.log(res)

// type aliases

type strOrNum = string | number;

let anything: strOrNum = 'adfd'
anything = 3