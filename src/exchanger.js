export default class CurrencyExchange {
  static getRate(amount, type) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("loadend",function() {
        const resultCurrency = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([resultCurrency, amount, type]);
        } else {
          reject([this, resultCurrency, amount, type]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}