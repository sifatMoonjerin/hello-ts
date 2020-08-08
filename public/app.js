"use strict";
// class
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes " + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var invOne = new Invoice("mario", "phone", 500);
var invTwo = new Invoice("goku", "bean", 1000);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// const anchor = document.querySelector('a') as HTMLAnchorElement;
// console.log(anchor.href)
var form = document.querySelector("form");
var type = document.querySelector("#type");
var tofrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
