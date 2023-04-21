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
  let currencyAmount = document.querySelector('#currency-amount').value;
  let currencyType = document.querySelector('#currency-type').value;
  const rates = data[0];
  const resultRate = rates.conversion_rates[currencyType];
  const resultAmount  = resultRate * currencyAmount;
  document.querySelector("#show-result").innerHTML = `<p>Your exchange:<p>
  <p>in ${currencyType} equals ${resultAmount}<p>`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  let currencyAmount = document.querySelector('#currency-amount').value;
  let currencyType = document.querySelector('#currency-type').value; 
  // const errorMessage = document.getElementById("error-message");
  getRate(currencyAmount, currencyType);
}

function printError(error) {
  document.querySelector('#show-results').innerText = `There was an error accessing our exchange for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
});


// for(let i=0; i=data[0].length; i++) {
  
  
//   results += `<p>Your exchange:<p>
//   <p>in ${currencyType} equals ${resultAmount}<p>`
// }
// const showResults = document.querySelector('show-results');
// showResults.innerHTML = `Here are your results:
// ${results}`;

