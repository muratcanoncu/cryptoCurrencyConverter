const apiUrl = "https://api.cryptonator.com/api/ticker/";
// HTML Elements
const entryField = document.querySelector(".entryField");
let cryptoInput = document.querySelector("#cryptoInput");
const outputField = document.querySelector(".outputField");
let cryptoOutput = document.querySelector("#cryptoOutput");
const convertBtn = document.querySelector("button");

convertBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // fetching api link
  fetch(`${apiUrl}${entryField.value}-${outputField.value}`)
    // parsing json file
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //selecting multiply ratio
      let ratio = data.ticker.price;
      // convert from crypto to real currency
      let convertedValue = cryptoInput.value * ratio;
      // push the value inside of the output
      cryptoOutput.value = convertedValue.toLocaleString();
    });
});
