import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';

// Business Logic

function getRate(amount, type) {
  CurrencyExchange.getRate(amount, type)
    .then(function(response, amount, type) {
      if (response.conversion_rates) {
        displayExchange(response, amount, type);
      } else {
        printError(response, amount, type);
      }
    });
}

// UI Logic

function displayExchange(response, type, amount) {
  const currencyType = document.querySelector('#currency-type').value;
  const currencyAmount = document.querySelector('#currency-amount').value;
  const rates = response.conversion_rates;
  let resultRate = rates[currencyType];
  let resultAmount  = resultRate * currencyAmount;
  if (rates.conversion_rates[currencyType] === undefined) {
    document.querySelector('#show-results').innerText = `${type} is not a real country code`;
  } else { 
    document.querySelector("#show-results").innerHTML = `<p>Your exchange from ${currencyAmount}$ USD<p>
    <p>in ${type} equals ${resultAmount}<p>`;
  }  
}

function handleFormSubmission(event) {
  event.preventDefault();
  const type = document.querySelector('#currency-type').value; 
  const amount = document.querySelector('#currency-amount').value;
  document.querySelector('#currency-type').value = null;
  document.querySelector('#currency-amount').value = null;
  getRate(amount, type);
}

function printError(error, type) {
  document.querySelector('#show-results').innerText = `There was an error accessing our exchange for ${type}:
${error}`;
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
});
//WIP, round decimals to 100th and reset values to null after input so can reuse withput browser refresh"


// let promise = CurrencyExchange.getRate(amount, type);
//   promise.then(function(data) {
//     displayExchange(data);
//   }, function(error) {
//     printError(error);  
//   });