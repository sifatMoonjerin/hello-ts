import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("mario", "phone", 5000);
const invTwo = new Invoice("goku", "bean", 1000);

const invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

// const anchor = document.querySelector('a') as HTMLAnchorElement;

// console.log(anchor.href)

const form = document.querySelector("form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (event: Event): void => {
  event.preventDefault();
  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
