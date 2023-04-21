import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';

// Business Logic

function getRate(amount, type) {
  let promise = CurrencyExchange.getRate(amount, type);
  promise.then(function(data) {
    displayExchange(data);
  }, function(error) {
    printError(error);  
  });
}

// UI Logic

function displayExchange(data) {
  let currencyType = document.querySelector('#currency-type').value;
  let currencyAmount = document.querySelector('#currency-amount').value;
  const rates = data[0];
  const resultRate = rates.conversion_rates[currencyType];
  const resultAmount  = resultRate * currencyAmount;
  if (rates.conversion_rates[currencyType] === undefined) {
    document.querySelector('#show-results').innerText = `${data[2]} is not a real country code`
  } else { 
    document.querySelector("#show-results").innerHTML = `<p>Your exhange from ${data[1]}$ USD<p>
    <p>in ${data[2]} equals ${resultAmount}<p>`;
  }  
}

function handleFormSubmission(event) {
  event.preventDefault();
  const type = document.querySelector('#currency-type').value; 
  const amount = document.querySelector('#currency-amount').value;
  // const errorMessage = document.getElementById("error-message");
  getRate(amount, type);
}

function printError(error) {
  document.querySelector('#show-results').innerText = `There was an error accessing our exchange for ${error[2]}: ${error[0].status} ${error[0].statusText}: ${error[1].message}`;
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
});

