/**
 * @param {string} elements
 * @return {number}
 */
function maxProductSubarray(elements) {
  // PLACEHOLDER_JAVASCRIPT_MAX_PRODUCT_SUBARRAY_BODY
  let n = elements.length;
  let prod = 1;
  let maxProd = 1; 

  for (let i = 0; i < elements.length; i++) {
    for (let j = i; j < n; j++) {
      let a = elements[i];

      for (let k = i + 1; k <= j; k++) {
        // a.push(elements[k])
        a = a * elements[k]
      }

      // console.log(a)
      maxProd = Math.max(maxProd, a);
    }
  }

  // console.log(maxProd)

  return maxProd;
}


console.log(maxProductSubarray([2, 3, -2, 4, 5]))
console.log(maxProductSubarray([-2, 0, -1]))
console.log(maxProductSubarray([1, -2, 3, 4]))





// // JavaScript program to find
// // Maximum Product Subarray

// /* Returns the product
//   of max product subarray.
// Assumes that the given
// array always has a subarray
// with product more than 1 */
// function maxSubarrayProduct(arr, n) {
//   // max positive product
//   // ending at the current position
//   let max_ending_here = 1;

//   // min negative product ending
//   // at the current position
//   let min_ending_here = 1;

//   // Initialize overall max product
//   let max_so_far = 0;
//   let flag = 0;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] > 0) {
//       max_ending_here = max_ending_here * arr[i];
//       min_ending_here
//         = Math.min(min_ending_here * arr[i], 1);
//       flag = 1;
//     }
//     else if (arr[i] == 0) {
//       max_ending_here = 1;
//       min_ending_here = 1;
//     }
//     else {
//       let temp = max_ending_here;
//       max_ending_here
//         = Math.max(min_ending_here * arr[i], 1);
//       min_ending_here = temp * arr[i];
//     }

//     // update max_so_far, if needed
//     if (max_so_far < max_ending_here)
//       max_so_far = max_ending_here;
//   }
//   if (flag == 0 && max_so_far == 0)
//     return 0;
//   return max_so_far;
// }