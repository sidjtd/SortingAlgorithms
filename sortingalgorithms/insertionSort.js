/**
 *  <-- Insertion Sort -->
 *  Take the first value in the array and make a new array, taking the first value of the original array off.
 *  Compare the value of the last index of the new array to the first value of the original array.
 *  If the value of the new array is lesser, push the first value of the original array to the new array, and shift it off the original.
 *  If it is greater, find the slot in the new array where it is greater than the value of the array index before it, but less than the one after it, and splice it in there while removing it from the old array.
 *  Repeat until there are no more values in the original array.
 **/
function insertionSort() {
  function sort(arr) {
    for(var i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
      if(typeof arr[i] !== 'number') {
        throw new Error('Invalid element in array.');
      }
    }
    var ans = [arr.shift()];
    var arrays = [ans.slice()];
    var arrLength = arr.length;
    for(i = 0; i < arrLength; i++) {
      if(arr[0] >= ans[ans.length - 1]){
        ans.push(arr.shift());
        arrays.push(ans.slice());

      } else if(arr[0] < ans[ans.length - 1] && arr[0] > ans[0]) {
        for(var j = 0; j < ans.length; j++) {
          if(ans[j] < arr[0] && ans[j + 1] > arr[0]) {
            ans.splice(j + 1,0,arr.shift());
            arrays.push(ans.slice());
          }
        }
      } else {
        if(arr[0] !== undefined) {
          ans.unshift(arr.shift());
          arrays.push(ans.slice());
        }
      }
    }
    console.log(arrays);
    updateCanvas(arrays);
    return ans;
  }
  return {
    InsertionSort: sort,
  };
}
module.exports = insertionSort;