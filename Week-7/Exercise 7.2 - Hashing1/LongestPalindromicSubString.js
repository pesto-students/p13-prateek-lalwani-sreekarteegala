/**
   * @param {string} s
   * @return {string}
   */
function longestPalindromicSubstring(s) {
    // TODO: Implement your code here
    let start, end, startIndex;
    let maxLength = 0;

    for (let i = 0; i <= s.length; i++) {      // 1
        start = i - 1;                    // 0  -1
        end = i + 1;                   // 2   3

        // If same word exists before mid then consider two/three... words as mid
        while (s[start] == s[i] && start >= 0) {
            start--;
        }

        // If same word exists after mid then consider two.three... words as mid
        while (s[end] == s[i] && end < s.length) {
            end++;
        }

        // decrease start to zero and increment end to n an check arr[start] is equal to arr[end]
        while (start >= 0 && end < s.length && s[start] == s[end]) {
            start--;
            end++;
        }

        let currLength = end - start - 1
        if (maxLength < currLength) {
            maxLength = currLength;
            startIndex = start + 1;
        }
    }


    return s.slice(startIndex, maxLength + startIndex);
}

// Javascript program to find the longest
// palindromic substring using hashing

// Function to find the longest
// palindromic substring
function longestPalindromicSubstring2(S) {

    // Initialize a hash table H with size
    // n and fill it with 0
    let n = S.length;
    let hash_table = new Array(n).fill(0);
    let isPalindrome = true;

    // Iterate through each character in the
    // string S and store its index in the
    // hash table H
    for (let i = 0; i < n; i++) {
        console.log(S[i].charCodeAt(0) - 'a'.charCodeAt(0), i);
        hash_table[S[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;
    }

    console.log(hash_table);
    // Initialize start and end indices of
    // the longest palindromic substring
    let start = 0, end = 0;

    // Iterate through each character
    // in the string S
    for (let i = 0; i < n; i++) {

        // Check if its corresponding index
        // in the hash table is greater than 0
        if (hash_table[S[i].charCodeAt(0) - 'a'.charCodeAt(0)] > 0) {
            // Calculate the length of the palindrome
            let len = hash_table[S[i].charCodeAt(0) - 'a'.charCodeAt(0)] - i;
            console.log("length:", len)
            // Check if the substring between
            // the current character and the
            // corresponding index in the
            // hash table is a palindrome
            isPalindrome = true;
            for (let j = 0; j < len; j++) {
                if (S[i + j] != S[hash_table[S[i].charCodeAt(0) - 'a'.charCodeAt(0)] - j]) {
                    isPalindrome = false;
                    break;
                }
            }

            // If the substring between the
            // current character and the
            // corresponding index in the
            // hash table is a palindrome, then
            // update the start and end indices
            // of the longest palindromic
            // substring
            if (isPalindrome && len > end - start) {
                start = i;
                end = hash_table[S[i].charCodeAt(0) - 'a'.charCodeAt(0)];
            }
        }
    }

    // Return the longest palindromic
    // substring
    if (isPalindrome) {
        return S.substring(start, end + 1);
    }
    else {
        return "not possible";
    }
}

// Driver code

let S = "babad";
let S2 = "forgeeksskeegfor";
let S3 = "pawan";
let S4 = "a";

// Function Call
console.log(longestPalindromicSubstring(S));
// console.log(longestPalindromicSubstring(S2));
// console.log(longestPalindromicSubstring(S3));
// console.log(longestPalindromicSubstring(S4));


// console.log(longestPalindromicSubstring("babad"))
// console.log(longestPalindromicSubstring("MAADAAM"))
// console.log(longestPalindromicSubstring("cbbd"))
