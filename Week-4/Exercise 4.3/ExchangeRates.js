const countryCode = 'usd';

// Promise to return ExchangeRates in json format
const getExchangeRates = new Promise((resolve, reject) => {
    fetch("https://api.exchangerate.host/latest")
        .then((resp) => resolve(resp.json()))
        .catch(() => reject(null));
});

// Using above promise to get ExchangeRate of a selected Country 
getExchangeRates
    .then((resp) => resp.rates[countryCode.toUpperCase()])
    .then((rate) => {
        if (typeof rate != "undefined")
            console.log(`Exchange rate for ${countryCode.toUpperCase()}: ${rate}`);
        else {
            console.log(`Invalid Country Code: ${countryCode.toUpperCase()}.`);
        }
    })
    .catch((error) => {
        console.log(`Error occured while fetching ExchangeRates for Country: ${countryCode.toUpperCase()}.`);
    });
