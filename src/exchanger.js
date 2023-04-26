export default class CurrencyExchange {
  static async getRate(amount, type) {
    let response;
    let resultCurrency;
    try {
      response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      resultCurrency = await response.json();

      return [resultCurrency, amount, type];
    } catch (err) {
      return [response, resultCurrency, type];
    }
  }
}
