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
    // put below in another function
    // var canvas = document.getElementById('canvas');
    // var ctx = canvas.getContext('2d');
    // var arrayLength = arrays.length;
    // var timer = window.setInterval(function() {
    //   if(arrays.length === 1) {
    //     window.clearInterval(timer);
    //   }
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   for(var i = 0;i < arrays[0].length;i++) {
    //     var width = canvas.width / arrayLength;
    //     ctx.beginPath();
    //     ctx.moveTo((i * 20) + width, canvas.height);
    //     ctx.lineWidth = 5;
    //     ctx.lineTo((i * 20) + width, canvas.height - (arrays[0][i] * canvas.height / (canvas.height / 2)));
    //     ctx.stroke();
    //   }
    //   document.getElementById('content').innerHTML = arrays[0];
    //   arrays.shift();
    // }, 200);
    return arr;
  }
  return {
    BubbleSort: sort
  };
}
module.exports = bubbleSort;