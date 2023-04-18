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
  APILink = `https://api.nbp.pl/api/exchangerates/rates/a/${selectionResult.value}/`;
};

const calculation = () => {
  const parsedInputAmount = parseFloat(valueOfInputAmount);
  const parsedCurrencyValue = parseFloat(currencyValue);
  calculationResult = parsedInputAmount * parsedCurrencyValue;
};

async function getData(APILink) {
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
  getData(APILink);
  resultDiv.classList.remove("unvisible");
  console.log(currencyName);
  selectionResult.querySelectorAll("option")[0].selected = "selected";
  inputAmount.value = "";
});
