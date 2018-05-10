var ship = new SpaceCraft('hyperdrive');
ship.jumpIntoHyperspace();
//Usando Herança
console.log('Usando Herança');
var falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();
console.log('Usando Interface');
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the Job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
