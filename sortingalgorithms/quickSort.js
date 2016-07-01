 /**
   * <-- QuickSort -->
   * Choose a pivot point.
   * Instantiate an array of numbers greater and less than the pivot point.
   * Use recursion on those arrays to split them up, instantiating another pivot point within the greater and less than arrays.
   * end if there is one number or nothing in the arrays, and return the array.
   */
function quickSort() {
  var arrays = [];
  function sort(arr) {
    var a = arr.slice();
    return sorter(a);
  }
  function doQuickSort(array) {
    var left = [], right = [];
    if(array.length <= 1) {
      return array;
    }
    var pivot = array.pop();
    for(var i = 0; i < array.length; i++) {
      if(array[i] <= pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
    var ans = doQuickSort(left).concat(pivot, doQuickSort(right));
    arrays.push(ans.slice());
    return ans;
  }
  function sorter(a) {
    for(var i = 0; i < a.length; i++) {
      if(typeof a[i] !== 'number') {
        throw new Error('Invalid element in array.');
      }
    }
    if(typeof a !== 'object') {
      throw new Error('Invalid array.');
    }
    if(a.length === 1) {
      return a;
    }
    var answer = doQuickSort(a);
    answer = answer.filter(function(e) {
      return e !== undefined;
    });
    arrays.push(answer.slice());
    updateCanvas(arrays);
    return answer;
  }
  return {
    QuickSort: sort,
  };
}
module.exports = quickSort;