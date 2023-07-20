import assert from "assert";
import transportFee from "../transportFee.js";

describe('The transportFee function', function () {

    it('shows user the fee payable depending on which shift they are working', function () {
        assert.equal(transportFee('morning'), 'R20');
    });

    it('shows user the fee payable depending on which shift they are working', function () {
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('shows user the fee payable depending on which shift they are working', function () {
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});