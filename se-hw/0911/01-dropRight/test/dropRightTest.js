const assert = require('assert')
const _ = require('../dropRight')

describe('lodash', function() {
    describe('dropRight', function() {
      it("_.dropRight(['1', '2', '3'], 2) equalTo ['1']", function() {
        assert.deepStrictEqual(_.dropRight(['1', '2', '3'], 2), ['1'])
      });
      it("_.dropRight(['1', '2', '3'], 3) equalTo [ ]", function() {
        assert.deepStrictEqual(_.dropRight(['1', '2', '3'], 3), [ ])
      });
      it("_.dropRight(['1', '2', '3']) equalTo ['1', '2']", function() {
        assert.deepStrictEqual(_.dropRight(['1', '2', '3']), ['1', '2'])
      });
    });
  });