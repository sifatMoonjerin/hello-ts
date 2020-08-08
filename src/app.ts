// class

class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;
  }

  format(): string {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mario", "phone", 500);
const invTwo = new Invoice("goku", "bean", 1000);

const invoices: Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

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
