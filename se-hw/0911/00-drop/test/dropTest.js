const assert = require('assert')
const _ = require('../drop')

describe('lodash', function() {
    describe('drop', function() {
      it("_.drop(['1', '2', '3'], 2) equalTo ['3']", function() {
        assert.deepStrictEqual(_.drop(['1', '2', '3'], 2), ['3'])
      });
      it("_.drop(['1', '2', '3'], 3) equalTo [ ]", function() {
        assert.deepStrictEqual(_.drop(['1', '2', '3'], 3), [ ])
      });
      it("_.drop(['1', '2', '3']) equalTo ['2', '3']", function() {
        assert.deepStrictEqual(_.drop(['1', '2', '3']), ['2', '3'])
      });
    });
  });