export default class CurrencyExchange {
  static getRate() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          const errorMessage = `${response.status} ${response.statusText}`;
          throw new Error(errorMessage);
        } else {
          return response.json();
        }  
      })
      .catch(function(error){
        return error;
      });
  }
}

// new Promise(function(resolve, reject) {
//   let request = new XMLHttpRequest();
//   const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
//   request.addEventListener("loadend",function() {
//     const resultCurrency = JSON.parse(this.responseText);
//     if (this.status === 200) {
//       resolve([resultCurrency, amount, type]);  
//     } else {
//       reject([this, resultCurrency, type]);
//     }
//   });
//   request.open("GET", url, true);
//   request.send();
// });