import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('The yearsAgo function', function () {

    it('calculates the amount of years ago from current to specified year', function () {
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

    it('calculates the amount of years ago from current to specified year', function () {
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });
});