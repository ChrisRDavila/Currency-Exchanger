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
* _add .env file to project, sign up for account with free key at ExchangeRate-API, grab ypu API key_
* _add .env file to .gitignore file, make sure to commit.gitignore with all necesary files to ignore ie (.dist, .env, node_modules, coverage if running eslint, .DS_Store if using Mac)
* _set up you API key in .env as to API_KEY_
* _since you'll be using an API key run $ npm install dotenv-webpack@2.0.0 --save-dev to use the key from .env file_
* _npm install --save-dev style-loader css-loader_
* _Install all packages with $ npm install._
* _When building the project use webpack use $ npm run build_
* _When starting a development server use $ npm run start_
* _If Linting JS files in the src folder use $ npm run lint_
* _When Running tests with Jest use $ npm run test_
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
