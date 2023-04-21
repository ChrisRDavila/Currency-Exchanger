export default class CurrencyExchange {
  static getRate(currency) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`;
      request.addEventListener("load",function() {
        const currencyType = JSON.parse(this.responseText);
        if (this.status === 200) {
          resolve([currencyType, currency]);
        } else {
          reject([this, currencyType, currency]);
        }
      });
      request.open("GET", url, true);
      request.send();
    });
  }
}