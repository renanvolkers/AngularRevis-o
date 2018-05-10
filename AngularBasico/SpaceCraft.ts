

let ship = new SpaceCraft('hyperdrive')

ship.jumpIntoHyperspace()


//Usando Herança
console.log('Usando Herança')


let falcon = new MillenniumFalcon()

falcon.jumpIntoHyperspace()

console.log('Usando Interface')



let goodForTheJob = (ship:Containership)=>ship.cargoContainers > 2

console.log(`Is falcon good for the Job? ${goodForTheJob(falcon) ? 'YES' :'NO'}`)