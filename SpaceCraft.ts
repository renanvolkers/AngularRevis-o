class SpaceCraft{

    constructor(public propulsor: string){}
    
    jumpIntoHyperspace(){
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }
}


let ship = new SpaceCraft('hyperdrive')

ship.jumpIntoHyperspace()


//Usando Herança
console.log('Usando Herança')
class MillenniumFalcon extends SpaceCraft implements Containership {


    cargoContainers:number
    constructor(){
        super('hyperdrive')
        this.cargoContainers = 4

    }

    jumpIntoHyperspace(){
        if(Math.random()>=0.5){
        super.jumpIntoHyperspace()
        }
        else {
            console.log('Failed to jump into hyperspace')
        }   
    }
}

let falcon = new MillenniumFalcon()

falcon.jumpIntoHyperspace()

console.log('Usando Interface')

interface  Containership{
  
    cargoContainers: number
}

let goodForTheJob = (ship:Containership)=>ship.cargoContainers > 2

console.log(`Is falcon good for the Job? ${goodForTheJob(falcon) ? 'YES' :'NO'}`)