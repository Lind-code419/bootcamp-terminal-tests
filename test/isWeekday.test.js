import assert from "assert";
import isWeekday from "../isWeekday.js";

describe('isWeekday function', function () {

    it('Checks if a day is a weekday', function () {
        assert.equal(isWeekday('Saturday'), false);
    });

    it('Checks if a day is a weekday', function () {
        assert.equal(isWeekday('Sunday'), false);
    });

    it('Checks if a day is a weekday', function () {
        assert.equal(isWeekday('Monday'), true);
    });

    it('Checks if a day is a weekday', function () {
        assert.equal(isWeekday('Tuesday'), true);
    });

    it('Checks if a day is a weekday', function () {
        assert.equal(isWeekday('Wednesday'), true);
    });

    it('Checks if a day is a weekday', function () {
        assert.equal(isWeekday('Thursday'), true);
    });

    it('Checks if a day is a weekday', function () {
        assert.equal(isWeekday('Friday'), true);
    });
});






