function updateCanvas(arrays) {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var arrayLength = arrays.length;
  var timer = window.setInterval(function() {
    var width = canvas.width / arrayLength;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(var i = 0;i < arrays[0].length;i++) {
      ctx.beginPath();
      ctx.moveTo((i * 20) + width, canvas.height);
      ctx.lineWidth = 5;
      ctx.lineTo((i * 20) + width, canvas.height - (arrays[0][i] * canvas.height / (canvas.height / 2)));
      ctx.stroke();
    }
    document.getElementById('content').innerHTML = arrays[0];
    arrays.shift();
    if(arrays.length === 0) {
      window.clearInterval(timer);
    }
  }, 500);
}
module.exports = updateCanvas;