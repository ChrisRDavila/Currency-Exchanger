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
