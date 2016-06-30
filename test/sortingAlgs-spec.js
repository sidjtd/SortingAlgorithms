var chai = require('chai');
var mocha = require('mocha');

var expect = chai.expect;
chai.should();
var bubbleSort = require('./../bubbleSort.js');
var insertionSort = require('./../insertionSort.js');
var mergeSort = require('./../mergeSort.js');
var quickSort = require('./../quickSort.js');
var selectionSort = require('./../selectionSort.js');
var updateCanvas = require('./../updateCanvas.js');
describe('Testing the BubbleSorting algorithm.', function () {
  it('Should return the sorted array.', function() {
    expect(bubbleSort().BubbleSort([1,8,5,2])).to.deep.equal([1,2,5,8]);
    expect(bubbleSort().BubbleSort([1])).to.deep.equal([1]);
    expect(bubbleSort().BubbleSort([2,2,2])).to.deep.equal([2,2,2]);
    expect(bubbleSort().BubbleSort([12,11,10])).to.deep.equal([10,11,12]);
  });
  it('Should throw an error if an array slot is not a number', function () {
    expect(bubbleSort().BubbleSort.bind(['a',3,2])).to.throw(Error);
    expect(bubbleSort().BubbleSort.bind([3,2,5,'$'])).to.throw(Error);
    expect(bubbleSort().BubbleSort.bind(['12',2,5])).to.throw(Error);
  });
});

describe('Testing the InsertionSorting algorithm.', function () {
  it('Should return the sorted array.', function() {
    expect(insertionSort().InsertionSort([1,8,5,2])).to.deep.equal([1,2,5,8]);
    expect(insertionSort().InsertionSort([1])).to.deep.equal([1]);
    expect(insertionSort().InsertionSort([2,2,2])).to.deep.equal([2,2,2]);
    expect(insertionSort().InsertionSort([12,11,10])).to.deep.equal([10,11,12]);
  });
  it('Should throw an error if an array slot is not a number', function () {
    expect(insertionSort().InsertionSort.bind(['a',3,2])).to.throw(Error);
    expect(insertionSort().InsertionSort.bind([3,2,5,'$'])).to.throw(Error);
    expect(insertionSort().InsertionSort.bind(['12',2,5])).to.throw(Error);
  });
});

describe('Testing the QuickSorting algorithm.', function () {
  it('Should return the sorted array.', function() {
    expect(quickSort().QuickSort([1,8,5,2])).to.deep.equal([1,2,5,8]);
    expect(quickSort().QuickSort([1])).to.deep.equal([1]);
    expect(quickSort().QuickSort([2,2,2])).to.deep.equal([2,2,2]);
    expect(quickSort().QuickSort([12,11,10])).to.deep.equal([10,11,12]);
  });
  it('Should throw an error if an array slot is not a number', function () {
    expect(quickSort().QuickSort.bind(['a',3,2], [], [])).to.throw(Error);
    expect(quickSort().QuickSort.bind([3,2,5,'$'], [], [])).to.throw(Error);
    expect(quickSort().QuickSort.bind(['12',2,5], [], [])).to.throw(Error);
  });
});