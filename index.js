const selection = document.getElementById("form-in-submit");
const currencyRate = document.getElementById("currency-rate");
const taskResult = document.getElementById("result");
const resultDiv = document.getElementById("result-div");

let APILink = "";
let currencyValue = "";
let currencyName = "";
let valueOfInputAmount = "";
let calculationResult = "0";

const chooseLink = (selectionResult) => {
  if (selectionResult.value === "EUR") {
    APILink = "https://api.nbp.pl/api/exchangerates/rates/a/eur/";
  } else if (selectionResult.value === "USD") {
    APILink = "https://api.nbp.pl/api/exchangerates/rates/a/usd/";
  } else if (selectionResult.value === "CHF") {
    APILink = "https://api.nbp.pl/api/exchangerates/rates/a/chf/";
  }
};

const calculation = () => {
  const parsedInputAmount = parseFloat(valueOfInputAmount);
  const parsedCurrencyValue = parseFloat(currencyValue);
  calculationResult = parsedInputAmount * parsedCurrencyValue;
};

async function Data(APILink) {
  try {
    const response = await fetch(APILink);
    const responseJson = await response.json();
    currencyName = await responseJson.code;
    currencyValue = await responseJson.rates[0].mid;
    calculation();
    currencyRate.innerHTML = `Aktualny kurs ${currencyName} wynosi: ${currencyValue} PLN`;
    taskResult.innerHTML = `${valueOfInputAmount} ${currencyName} to ${calculationResult.toFixed(
      2
    )} PLN`;
  } catch (err) {
    alert(err.message);
  }
}

selection.addEventListener("click", function (e) {
  e.preventDefault();
  const selectionResult = document.querySelector("#selected-currency");
  const inputAmount = document.querySelector("#input-amount");
  valueOfInputAmount = inputAmount.value;
  chooseLink(selectionResult);
  Data(APILink);
  resultDiv.classList.remove("unvisible");
  console.log(currencyName);
  selectionResult.querySelectorAll("option")[0].selected = "selected";
  inputAmount.value = "";
});
