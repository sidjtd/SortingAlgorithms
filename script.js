var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

function sorted(arr) {
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
  var arrayLength = arrays.length;
  var timer = window.setInterval(function() {
    if(arrays.length === 1) {
      window.clearInterval(timer);
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0;i < arrays[0].length;i++) {
      ctx.beginPath();
      ctx.moveTo((i * 20) + canvas.width / arrayLength, canvas.height);
      ctx.lineWidth = 5;
      ctx.lineTo((i * 20) + canvas.width / arrayLength, canvas.height - (arrays[0][i] * canvas.height / (canvas.height / 2)));
      ctx.stroke();
    }
    document.getElementById('content').innerHTML = arrays[0];
    arrays.shift();
  }, 200);
  return arr;
}
sorted([100,55,27,109,121,123,21,20,71,12,78,120,99,80,15,20,19,77,120,120,120,250,350,250,300,25,190,260,170,80,40,20,15,170,200,150]);

