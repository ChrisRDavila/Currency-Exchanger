import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchange from './exchanger.js';

// Business Logic

async function getRate(amount, type) {
  try {
    const rate = await CurrencyExchange.getRate(amount, type);
    displayExchange(rate);
  } catch(response) {
    printError(response);  
  }
}

// UI Logic

function displayExchange(data) {
  let currencyInput = document.querySelector('#currency-type').value;
  let currencyType = currencyInput.toUpperCase();
  let currencyAmount = document.querySelector('#currency-amount').value;
  const rates = data[0];
  const resultRate = rates.conversion_rates[currencyType];
  const resultAmount  = (resultRate * currencyAmount).toFixed(2);
  if (rates.conversion_rates[currencyType] === undefined) {
    document.querySelector('#show-results').innerText = `${data[2]} is not a real country code`;
    document.querySelector('#currency-type').value = null;
    document.querySelector('#currency-amount').value = null;
  } else { 
    document.querySelector("#show-results").innerHTML = `<p>Your exchange from ${data[1]}$ USD<p>
    <p>in ${data[2]} equals ${resultAmount}<p>`;
    document.querySelector('#currency-type').value = null;
    document.querySelector('#currency-amount').value = null;
  }  
}

function printError(error) {
  document.querySelector('#show-results').innerText = `There was an error accessing the data from exchange rate API ${error}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const type = document.querySelector('#currency-type').value; 
  const amount = document.querySelector('#currency-amount').value;
  getRate(amount, type);
}

window.addEventListener("load", function() {
  this.document.querySelector("form").addEventListener("submit", handleFormSubmission);
});


