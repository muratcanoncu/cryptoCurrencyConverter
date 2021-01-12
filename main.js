"use strict";
// API Link to convert
// const apiUrl = "https://api.cryptonator.com/api/ticker/";
// HTML Elements
// const entryField = document.querySelector(".entryField");
// let cryptoInput = document.querySelector("#cryptoInput");
// const outputField = document.querySelector(".outputField");
// let cryptoOutput = document.querySelector("#cryptoOutput");
// const convertBtn = document.querySelector("button");
// // event Listener for convert button
// convertBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   // fetching api link
//   fetch(`${apiUrl}${entryField.value}-${outputField.value}`)
//     // parsing json file
//     .then((response) => response.json())
//     .then((data) => {
//       //selecting multiply ratio
//       let ratio = data.ticker.price;
//       // convert from crypto to real currency
//       let convertedValue = cryptoInput.value * ratio;
//       // push the value inside of the output
//       cryptoOutput.value = convertedValue.toLocaleString();
//     });
// });

//! Object Oriented Programming
class CryptoCurrency {
  constructor() {
    this.url = `https://api.cryptonator.com/api/ticker/`;
    this.select = document.querySelector(".entryField");
    this.select2 = document.querySelector(".outputField");
    this.input = document.querySelector("#cryptoInput");
    this.output = document.querySelector("#cryptoOutput");
    this.convertBtn = document.querySelector("button");
    this.myFunction();
  }
  myFunction() {
    this.convertBtn.addEventListener("click", (e) => {
      e.preventDefault();
      fetch(`${this.url}${this.select.value}-${this.select2.value}`)
        .then((data) => data.json())
        .then(
          (response) =>
            (this.output.value = (
              response.ticker.price * this.input.value
            ).toLocaleString())
        );
    });
  }
}
let myCryptoCurrency = new CryptoCurrency();
