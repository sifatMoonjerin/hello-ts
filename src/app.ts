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
