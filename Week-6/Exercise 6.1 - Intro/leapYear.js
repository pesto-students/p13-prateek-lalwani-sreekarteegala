/**
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
    // PLACEHOLDER_JAVASCRIPT_FUNCTION_BODY
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Yes"
    }
    else {
        return "No"
    }
}


console.log(isLeapYear(2000))
console.log(isLeapYear(2020))
console.log(isLeapYear(1900))
console.log(isLeapYear(2021))
