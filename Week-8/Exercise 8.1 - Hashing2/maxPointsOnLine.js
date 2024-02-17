/*
Solved using slope
*/

/**
 * @param {number[][]} points
 * @return {number}
 */
function maxPointsOnLinee(points) {
    let map = new Map();
    let currMax = 0;
    let maxLen = 0;

    for (let i = 0; i < points.length; i++) {
        let [x1, y1] = points[i];

        for (let j = i+1; j < points.length; j++) {
            let [x2, y2] = points[j];

            let slope = y2 - y1 / x2 - x1;

            if (map.has(slope)) {
                map.set(slope, map.get(slope) + 1)
            } else
                map.set(slope, 1)

            currMax = Math.max(currMax, map.get(slope))
        }
        console.log(maxLen, currMax)
        maxLen = Math.max(maxLen, currMax + 1);
        map.clear()
    }

    return maxLen;
}

function gcd(a, b) {

    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}

function maxPointsOnLine(points) {
    let map = new Map();
    let maxLen = 0;
    let verticalPoints = 0, overlapPoints = 0, currMax = 0;

    for (let i = 0; i < points.length; i++) {
        let [x1, y1] = points[i];

        for (let j = i + 1; j < points.length; j++) {
            let [x2, y2] = points[j];

            if (points[i] === points[j]) {
                overlapPoints++;
            }

            // If x co-ordinate is same, then both
            // point are vertical to each other
            else if (x1 === x2) {
                verticalPoints++;
            } else {

                let ydiff = y2 - y1;
                let xdiff = x2 - x1;
                let g = gcd(ydiff, xdiff);

                xdiff = Math.floor(xdiff / g)
                ydiff = Math.floor(ydiff / g)

                let key = [ydiff, xdiff].join(' ');
                if (map.has(key)) {
                    map.set(key, map.get(key) + 1)
                } else
                    map.set(key, 1)

                currMax = Math.max(currMax, map.get(key))
            }
            currMax = Math.max(currMax, verticalPoints);
        }
        maxLen = Math.max(maxLen, currMax + overlapPoints + 1);
        map.clear()
    }

    return maxLen;
}

// console.log(maxPointsOnLinee([[1, 1], [2, 2], [3, 3], [4, 5], [5, 6], [6, 7]]))
console.log(maxPointsOnLine([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]))