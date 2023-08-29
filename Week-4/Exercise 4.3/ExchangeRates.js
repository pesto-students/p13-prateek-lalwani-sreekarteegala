async function getExchangeRates(currencyCode) {
    let apiUrl = "https://api.exchangerate.host/latest";

    try {
        const data = await fetch(apiUrl);
        const outputData = await data.json();

        return outputData.rates[currencyCode.toUpperCase()];
    } catch (ex) {
        console.error(ex);
        return null;
    }
}

const countryCode = 'usd';

getExchangeRates(countryCode)
    .then((rate) => {
        if (typeof rate != "undefined")
            console.log(`Exchange rate for ${countryCode}: ${rate}`);
        else {
            console.log(`Invalid Country Code: ${countryCode}.`);
        }
    })
    .catch((error) => {
        console.log(error)
    });

