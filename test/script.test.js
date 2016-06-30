var chai = require('chai');
var mocha = require('mocha');

var expect = chai.expect;
chai.should();
var sorting = require('./../script.js');
describe('Testing the BubbleSorting algorithm.', function () {

  it('Should return the sorted array.', function() {
    expect(sorting().BubbleSort([1,8,5,2])).to.deep.equal([1,2,5,8]);
    expect(sorting().BubbleSort([1])).to.deep.equal([1]);
    expect(sorting().BubbleSort([2,2,2])).to.deep.equal([2,2,2]);
    expect(sorting().BubbleSort([12,11,10])).to.deep.equal([10,11,12]);
  });
  it('Should throw an error if an array slot is not a number', function () {
    expect(sorting().BubbleSort.bind(['a',3,2])).to.throw(Error);
    expect(sorting().BubbleSort.bind([3,2,5,'$'])).to.throw(Error);
    expect(sorting().BubbleSort.bind(['12',2,5])).to.throw(Error);
  });
});

describe('Testing the QuickSorting algorithm.', function () {
  it('Should return the sorted array.', function() {
    expect(sorting().QuickSort([1,8,5,2])).to.deep.equal([1,2,5,8]);
    expect(sorting().QuickSort([1])).to.deep.equal([1]);
    expect(sorting().QuickSort([2,2,2])).to.deep.equal([2,2,2]);
    expect(sorting().QuickSort([12,11,10])).to.deep.equal([10,11,12]);
  });
  it('Should throw an error if an array slot is not a number', function () {
    expect(sorting().QuickSort.bind(['a',3,2], [], [])).to.throw(Error);
    expect(sorting().QuickSort.bind([3,2,5,'$'], [], [])).to.throw(Error);
    expect(sorting().QuickSort.bind(['12',2,5], [], [])).to.throw(Error);
  });
});