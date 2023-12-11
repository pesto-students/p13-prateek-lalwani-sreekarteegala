/**
 * @param {number[]} arr
 * @return {number[]}
 */

function* generator(arr) {
  for (i = 0; i < arr.length; i++) {
    yield arr[i];
  }
}
function deleteDivisibleElements(arr) {
  // PLACEHOLDER_JAVASCRIPT_DELETE_DIVISIBLE_ELEMENTS_BODY
  // let gen = generator(arr);
  let output = [];


  // for (const sym of gen) {
  //   if (sym % 2 !== 0) {

  //     output.push(sym);
  //   } else {
  //     gen.next();
  //   }

  //   if (sym % 3 !== 0) {

  //     output.push(sym);
  //   } else {
  //     gen.next();
  //   }
  // }

  for (i = 0; i < arr.length; i++) {
    // console.log(arr[i], "Mod2: ", arr[i] % 2, "Mod3: ", arr[i] % 3, arr[i] % 2 !== 0, arr[i] % 3 !== 0, "-------", !(arr[i] % 2 === 0 && arr[i] % 3 === 0));
    if (!(arr[i] % 2 === 0 && arr[i] % 3 === 0)) {
      output.push(arr[i])
    }
  }
  return output
}


// console.log(deleteDivisibleElements([2, 4, 6, 8, 10, 15])) // []
console.log(deleteDivisibleElements([9, 12, 15, 18, 21]))
// console.log(deleteDivisibleElements([1, 2, 3, 4, 5, 6, 7, 8, 9]))