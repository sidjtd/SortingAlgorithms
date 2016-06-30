/**
 * <-- Selection Sort -- >
 * Initiate a new array.
 * Get the smallest value in the old array and remove it, then push that value into the new array.
 * Loop until there is nothing in the old array
 **/
function selectionSort() {
  function sort(arr) {
    var ans = [];
    while(arr.length !== 0) {
      var smallestValue = arr[0];
      for(var i = 0; i < arr.length; i++) {
        if(arr[i] < smallestValue) {
          smallestValue = arr[i];
        }
      }

      ans.push(Number(arr.splice(arr.indexOf(smallestValue),1).toString()));
    }
    return ans;
  }
  return {
    SelectionSort: sort,
  };
}
module.exports = selectionSort;

