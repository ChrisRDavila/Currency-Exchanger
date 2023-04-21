export default class CurrencyExchange {
  static getRate(currency, type) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.addEventListener("load",function() {
        const resultCurrency = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([resultCurrency, currency, type]);
        } else {
          reject([this, resultCurrency, currency, type]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}