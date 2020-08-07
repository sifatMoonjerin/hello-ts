const userName: string = "Sifat";
const age: number = 25;
const isMarried: boolean = false;

const sayHello: (name: string) => void = (name) => {
  console.log(`Hello, ${name}`);
};

sayHello(userName);
