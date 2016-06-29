var chai = require('chai');
var mocha = require('mocha');

var expect = chai.expect;
chai.should();
var bubbleSort = require('../script.js');

describe('Testing the sorting algorithm.', function () {
  it('Should return the sorted array.', function() {
    expect(bubbleSort([1,8,5,2])).to.deep.equal([1,2,5,8]);
    expect(bubbleSort([1])).to.deep.equal([1]);
    expect(bubbleSort([2,2,2])).to.deep.equal([2,2,2]);
    expect(bubbleSort([12,11,10])).to.deep.equal([10,11,12]);
  });
  it('Should throw an error if an array slot is not a number', function () {
    expect(bubbleSort.bind(['a',3,2])).to.throw(Error);
    expect(bubbleSort.bind([3,2,5,'$'])).to.throw(Error);
    expect(bubbleSort.bind(['12',2,5])).to.throw(Error);
  });
});