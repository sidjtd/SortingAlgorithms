window.onload = function(){
  document.getElementById('bubble').addEventListener('click', function() {
    bubbleSort().BubbleSort(yourArray);
  });
  document.getElementById('insertion').addEventListener('click', function() {
    insertionSort().InsertionSort(yourArray);
  });
  document.getElementById('merge').addEventListener('click', function() {
    mergeSort().MergeSort(yourArray);
  });
  document.getElementById('quick').addEventListener('click', function() {
    quickSort().QuickSort(yourArray);
  });
  document.getElementById('selection').addEventListener('click', function() {
    selectionSort().SelectionSort(yourArray);
  });
};
var yourArray = [];
function addToArray() {
  var value = document.getElementById('number').value;
  if(!value) {
    return;
  }
  yourArray.push(Number(value));
  document.getElementById('number').value = '';
  document.getElementById('yourArray').innerHTML = yourArray;
}
