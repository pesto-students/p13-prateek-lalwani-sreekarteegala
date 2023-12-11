function indicesRecursive(arr, target, index, output) {
  //TODO: Implement the indicesRecursive funtion
  if (arr.length === index) {
    return output;
  }

  if (arr[index] == target) {
    output.push(index);
  }

  return indicesRecursive(arr, target, index + 1, output);

}

function indicesMain(arr, target) {
  //TODO: Implement the indicesMain funtion
  let output = [];

  return indicesRecursive(arr, target, 0, output)
}


console.log(indicesMain([2, 4, 3, 5, 4], 4));