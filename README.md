# (Currency Exchanger)

#### (Converts input USD amount to chosen country currency)

#### By (Christopher Davila)

## Technologies Used

* _webpack_
* _npm_
* _html_
* _javascript_
* _API_
* _file loader_
* _css loader_
* _dotenv key file loader_


## Description
This Application has inputs that will allow the user to choose a country based on a country code and a US dollar amount based on input and see what the input amount in US Dollars would be worth in the currency of the choosen country

## Setup/Installation Requirements

* _Clone file from repository_
* _add .env file to project for key storage_
* _sign up for account with free key at [ExchangeRate-API](https://www.exchangerate-api.com/docs/overview), copy API key to clipboard or somewhere safe_
* _add .env to .gitignore file, make sure to commit.gitignore with all necesary files to ignore ie (.dist, .env, node_modules, coverage if running eslint, .DS_Store if using Mac) before any other commit if creating repo_
* _save your API key in .env file setting your API_KEY={place_key_#_here} (where you fill in your api key number in place of the curly bracket example) so it can be read in the response variables API Call_
* _Install all packages with $ npm install._
* _build the project webpack with $ npm run build_
* _start a development server using $ npm run start and view the created project page in your browser_
* _fill in the inputs according to instructions with the necessary country code and desired US Dollar amount your wish to exchange values for_
* _if unaware of which country code to use for desired country click the link to a page that will provide them for you_
* _submit your input and you will recieve a result that will tell you how much your US dollars is worth in your chosen currency_
* _if wish to repeat process simply fill in input and submit again_


## Known Bugs

* _country codes will appear in caps on the input bar and if input in lowercase will be changed to uppercase also when calling on API array for conversion rate key values but return will conversion will still print out as lower case if entered in all lowercase or partial lowercase_
* _no limit set for highest input for USD so impossibly high values can be input but will still recieve response_
* _to redirect to currency exchanger from IBAN page, have to go back to previous page with browser or reload_

## Acknowledments
* _link made to https://www.iban.com/currency-codes for IBAN's list of currency codes_
* _background photo used from shuttershock_

## License
[MIT](https://github.com/ChrisRDavila/Currency-Exchanger/blob/main/LICENSE.txt)
