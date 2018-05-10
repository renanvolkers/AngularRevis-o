"use strict";
exports.__esModule = true;
//pode ser usado export no inicio da classe ou interface
var SpaceCraft = /** @class */ (function () {
    function SpaceCraft(propulsor) {
        this.propulsor = propulsor;
    }
    SpaceCraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return SpaceCraft;
}());
exports.SpaceCraft = SpaceCraft;
