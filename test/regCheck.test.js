import assert from "assert";
import regCheck from "../regCheck.js";

describe('The regCheck function', function () {

    it('checks which province a vehicle is from', function () {
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('checks which province a vehicle is from', function () {
        assert.equal(regCheck('5566 L', 'L'), true);
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it('checks which province a vehicle is from', function () {
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('checks which province a vehicle is from', function () {
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });

});






