function sorted() {
  function sort(arr) {
    for(var i = 0; i < arr.length; i++) {
      if(typeof arr[i] !== 'number') {
        throw new Error('Invalid element in array.');
      }
    }
    var sorted = false;
    while(sorted === false) {
      var swaps = 0;
      for(i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i-1]) {
          var temp = arr[i];
          arr[i] = arr[i-1];
          arr[i-1] = temp;
          swaps++;
        }
        console.log(arr);
      }
      if(swaps === 0) {
        sorted = true;
      }
    }
    return arr;
  }
  return {
    sort: sort,
  };
}

module.exports = sorted;