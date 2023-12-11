/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (!s || !t || t.length > s.length) return ""

    const map = {};

    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]]++
        } else {
            map[t[i]] = 1
        }
    }

    let l = 0, r = 0, substring='';
    let count = Object.keys(map).length;

    while (r <= s.length) {

        map[s[r]]--;

        if (map[s[r]] === 0) count--;

        while (count === 0) {

            if(!substring||substring.length > r-l+1)
                substring = s.slice(l, r + 1);

            if (map[s[l]] === 0) count++;

            map[s[l]]++;
            l++
        }
        r++
    }

    return substring;
};

// let s = "ADOBECODEBANC", t = "ABC";
// let s = "aabbaabbaabb", t = "abba";
// let s = "hello world", t = "orl";
let s = "xyyzyzyyx", t = "xyz";

console.log(minWindow(s, t));
// var minWindow = function (s, t) {
//     if (!s || !t || t.length > s.length) return ""

//     // const map = new map();
//     const map = {};

//     for (let i = 0; i < t.length; i++) {
//         if (map[t[i]]) {
//             map[t[i]]++
//         } else {
//             map[t[i]] = 1
//         }
//     }

//     let l = 0, r = 0;
//     let count = Object.keys(map).length;

//     while (r <= s.length) {

//         map[s[r]]--;

//         if (map[s[r]] === 0) count--;

//         while (count === 0) {
            
//             let sunString = s.slice(l, r + 1);

//             if (map[s[l]] === 0) count++;

//             map[s[l]]++;
//             l++
//         }
//         r++
//     }

//     return map;
// };

// let s = "ADOBECODEBANC", t = "ABC";

// console.log(minWindow(s, t));