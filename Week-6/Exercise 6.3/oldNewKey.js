/**
 * @param {string[]} arr
 * @param {string} oldKey
 * @param {string} newKey
 * @return {string[]}
 */
function replaceKey(arr, oldKey, newKey) {
    // PLACEHOLDER_JAVASCRIPT_REPLACE_KEY_BODY
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === oldKey) {
        arr[i] = newKey;
      }
    }
  
    return arr;
  }
  