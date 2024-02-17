function findSqrt(num) {
    let l = 0,
        r = num,
        res = -1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (mid * mid == num) {
            res = mid;
            break;
        }

        if (mid * mid < num) {
            res = mid;

            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    let deci = 0.1
    for (let i = 0; i < 5; i++) {
        while (res * res < num) {
            res += deci
        }

        // because while loop iterates one extra loop and then fails with the condition. 
        // So We have to remove the last decimal value after while loop
        res = res - deci;
        deci = deci / 10;
    }

    return res.toFixed(5);
}

console.log("Square Root of 16 : ",findSqrt(16));
console.log("Square Root of  2 : ",findSqrt(2));