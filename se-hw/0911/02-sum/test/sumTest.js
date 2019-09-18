const assert = require('assert')
const _ = require('../sum')

describe('lodash', function() {
    describe('sum', function() {
      it("_.sum(['4', '2', '8', '6']) equalTo '20'", function() {
        assert.deepStrictEqual(_.sum([4, 2, 8, 6]), 20)
      });
    });
  });