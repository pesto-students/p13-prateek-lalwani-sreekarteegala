/**
 * @param {number} x
 * @param {number} p
 * @return {number}
 */
function exponentiation(x, p) {
    // TODO: Implement your code here
    if (p == 0) {
        return 1;
    }
    let a;

    if (p > 0)
        a = exponentiation(x, Math.floor(p / 2));
    else
        a = exponentiation(x, Math.floor((p / -1) / 2));

    if (p % 2 == 0) {
        return p > 0 ? a * a : 1 / (a * a);
    }

    return p > 0 ? x * a * a : 1 / (x * a * a);
}