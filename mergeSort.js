/**
 * <-- Merge Sort -->
 * Splits the arrays until there is one element in the array and assigns them to a left and right variable.
 * call another merge function that compares the left and right variables and pushes the smallest one into another array, then removing it.
 * Left and Right on the way back up now only have one variable each, comparing those until there are no elements left to push into the sorted array.
**/
function mergeSort() {
  function sort(arr) {
    if(arr.length === 1) {
      return arr;
    }
    var left = [], right = [];
    for(var i = 0; i < (arr.length / 2); i++) {
      left.push(arr.shift());
    }
    right = arr.slice();
    left = sort(left);
    right = sort(right);
    return merge(left,right);
  }
  function merge(a,b) {
    var c = [];
    while(a.length !== 0 && b.length !== 0) {
      if(a[0] > b[0]) {
        c.push(b.shift());
      } else {
        c.push(a.shift());
      }
    }
    while(a.length !== 0) {
      c.push(a.shift());
    }
    while(b.length !== 0) {
      c.push(b.shift());
    }
    return c;
  }
  return {
    MergeSort: sort,
  };
}
module.exports = mergeSort;