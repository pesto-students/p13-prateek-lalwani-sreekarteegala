const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
};

// Implementing closure to make cache onject private.
function cacheMemory(func) {
    const cache = {};

    return (...args) => {
        const input = JSON.stringify(args);

        if (!cache[input])
            cache[input] = func.apply(this, args);

        return cache[input];
    }
}

function getCityTemp(city) {
    return temperatureData[city];
}

const getTemperatureForCity = cacheMemory(getCityTemp);

const temperature1 = getTemperatureForCity('New York'); 
console.log(temperature1); // 20

const temperature2 = getTemperatureForCity('New York'); 
console.log(temperature2); // 20 (retrieved from cache)

const temperature3 = getTemperatureForCity('London'); 
console.log(temperature3); // 18

const temperature4 = getTemperatureForCity('London'); 
console.log(temperature4); // 18 (retrieved from cache) 