import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// const invOne = new Invoice("mario", "phone", 5000);
// const invTwo = new Invoice("goku", "bean", 1000);
// const invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });
// const anchor = document.querySelector('a') as HTMLAnchorElement;
// console.log(anchor.href)
const form = document.querySelector("form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
// interface Point {
//   x: number;
// }
// const center: Point = {
//   x: 1,
//   y: 4,
// };
// interface Point {
//   y: number;
// }
