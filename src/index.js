import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';

// Business Logic

function getRate(currency) {
  let promise = CurrencyExchange.getRate(currency);
  promise.then(function(rateInfo) {
    displayExchange(rateInfo);
  }, function(rateError) {
    printError(rateError);  
  });
}

// UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  let currencyAmount = document.querySelector('#currency-amount').value;
  let currencyType = document.querySelector9('#currency-type').value 
  const errorMessage = document.getElementById("error-message");
  getRate(currencyAmount, currencyType);
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFprmSubmission);
})

