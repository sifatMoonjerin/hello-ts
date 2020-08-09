import { ListTemplate } from "./classes/ListTemplate.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";

const form = document.querySelector("form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (event: Event): void => {
  event.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});


// Generics

const addUID = <T extends object>(obj: T) => {
  const uid = Math.floor(Math.random() * 100)
  return {...obj, uid}
}

const person = addUID({name: 'sifat', age: 25})

console.log(person.name)

interface Resources<S,T>{
  uid: number;
  title: S;
  data: T;
}

const obj: Resources<string,{name: string}> = {
  uid: 4,
  title: 'book',
  data: {
    name: 'hello'
  }
}