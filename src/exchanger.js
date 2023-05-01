export default class CurrencyExchange {
  static async getRate(amount, type) {
    let response;
    let resultCurrency;
    response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
    resultCurrency = await response.json();
    if(!response.ok) {
      throw new Error(resultCurrency["error-type"]);
    }
    return [resultCurrency, amount, type];
  }
}
