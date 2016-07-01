/**
   * <--Bubble Sort-->
   * Initiate Array.
   * Loop through an array.
   *    If currentIndex is less than nextIndex.
   *      Swap
   *    break out if
   *      index is not a valid input OR no swaps are performed
**/
function bubbleSort() {
  function sort(arr) {
    for(var i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
      if(typeof arr[i] !== 'number') {
        throw new Error('Invalid element in array.');
      }
    }
    var sorted = false;
    var arrays = [arr.slice()];
    while(sorted === false) {
      var swaps = 0;
      for(i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i-1]) {
          var temp = arr[i];
          arr[i] = arr[i-1];
          arr[i-1] = temp;
          swaps++;
          arrays.push(arr.slice());
        }
      }
      if(swaps === 0) {
        sorted = true;
      }
    }
    updateCanvas(arrays);
    return arr;
  }
  return {
    BubbleSort: sort
  };
}
module.exports = bubbleSort;