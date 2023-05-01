export default class CurrencyExchange {
  static async getRate(amount, type) {
    let response;
    let resultCurrency;
    try {
      response = await fetch(`https://v6.exchangerate-api.com/v5/${process.env.API_KEY}/latest/USD`);
      resultCurrency = await response.json();
      if(!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}
        ${resultCurrency[2]}`;
        throw new Error(errorMessage);
      }
      return [resultCurrency, amount, type];
    } catch (error) {
      return error;
    }
  }
}
