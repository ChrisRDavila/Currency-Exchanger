import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';

// Business Logic

function getRate(currency, type) {
  let promise = CurrencyExchange.getRate(currency, type);
  promise.then(function(rateInfo) {
    displayExchange(rateInfo);
  }, function(rateError) {
    printError(rateError);  
  });
}

// UI Logic

function displayExchange(data) {
  const rates = data[0];
  let results = "";

  for(let i=0; i=data[0].length; i++) {
    const rate = rates[i];
    const resultCurrency = rate.conversion_rates;
    const resultAmount  = rate.currencyAmount;
    
    results = `<p>Your exchange:<p>
    <p>in ${resultCurrency} equals ${resultAmount}<p>`
  }
  const showResults = document.querySelector('show-results');
  showResults.innerHTML = `Here are your results:
  ${results}`;

}

function handleFormSubmission(event) {
  event.preventDefault();
  let currencyAmount = document.querySelector('#currency-amount').value;
  let currencyType = document.querySelector9('#currency-type').value 
  const errorMessage = document.getElementById("error-message");
  getRate(currencyAmount, currencyType);
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
})

