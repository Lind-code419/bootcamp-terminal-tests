import assert from "assert";
import fromWhere from "../fromWhere.js";

describe('The fromWhere function', function () {

    it('return town based on registration number', function () {
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 

    });
    it('return town based on registration number', function () {
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
    });

    it('return town based on registration number', function () {
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
    });

    it('return town based on registration number', function () {
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });
});