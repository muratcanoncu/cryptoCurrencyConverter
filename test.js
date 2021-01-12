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
