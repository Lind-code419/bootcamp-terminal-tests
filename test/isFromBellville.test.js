import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe('The isFromBellville function', function () {

    it('Checks if a vehicle registration is from Bellville', function () {
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

});