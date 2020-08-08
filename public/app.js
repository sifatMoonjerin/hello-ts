import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("mario", "phone", 5000);
const invTwo = new Invoice("goku", "bean", 1000);
const invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
// const anchor = document.querySelector('a') as HTMLAnchorElement;
// console.log(anchor.href)
const form = document.querySelector("form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
