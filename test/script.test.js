var chai = require('chai');
var mocha = require('mocha');

var expect = chai.expect;
chai.should();
var bubbleSort = require('../script.js');

var test = bubbleSort();

describe('Testing the sorting algorithm.', function () {
  it('Should return the sorted array.', function() {
    expect(test.sort([1,8,5,2])).to.deep.equal([1,2,5,8]);
    expect(test.sort([1])).to.deep.equal([1]);
    expect(test.sort([2,2,2])).to.deep.equal([2,2,2]);
  });
  it('Should throw an error if an array slot is not a number', function () {
    expect(test.sort.bind(['a',3,2])).to.throw(Error);
    expect(test.sort.bind([3,2,5,'$'])).to.throw(Error);
    expect(test.sort.bind(['12',2,5])).to.throw(Error);
  });
});