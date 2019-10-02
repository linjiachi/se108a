//const assert = require('assert')
const expect = require('chai').expect
const _ = require('../last')

describe('lodash', function() {
    describe('last', function() {
      it("_.last(['1', '2', '3']) equalTo '3'", function() {
        expect(_.last(['1', '2', '3'])).to.deep.equal(['3'])
        //assert.deepStrictEqual(_.last(['1', '2', '3']), ['3'])
      });
    });
  });