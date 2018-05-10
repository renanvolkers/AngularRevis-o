"use strict";
exports.__esModule = true;
var _ = require("lodash");
console.log(_.pad("TypeScript Examples", 40, "="));
var message = "Helpme, Obi-Wan Kenobi. You 're my only hope!";
console.log(message);
var episode = 4;
console.log(episode);
episode = episode + 1;
console.log(episode);
episode = episode + '4';
console.log("Novo episode" + episode);
//Funções e suas implementações.
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 5;
console.log("Is " + distance + " parsec enougt to beat Million Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
//EUROFunction é uma forma enxuta de escrever
var call = function (name) { return console.log("Do you copy," + name + "?"); };
call('R2');
//Paramentros padroões
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log('Testando funções');
console.log("inc(5,1)=" + inc(5, 1));
console.log("inc(5)=" + inc(5));
