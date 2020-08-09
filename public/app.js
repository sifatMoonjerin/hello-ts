import { ListTemplate } from "./classes/ListTemplate.js";
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector("form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let doc;
    const values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
// Generics
const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const person = addUID({ name: 'sifat', age: 25 });
console.log(person.name);
// Enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["CD"] = 1] = "CD";
    ResourceType[ResourceType["RADIO"] = 2] = "RADIO";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 4,
    type: ResourceType.BOOK,
    data: {
        name: 'hello'
    }
};
const docTwo = {
    uid: 4,
    type: ResourceType.RADIO,
    data: 'news'
};
// tuples
let tup;
tup = ['adf', 2];
