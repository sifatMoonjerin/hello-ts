"use strict";
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
