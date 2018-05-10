import{SpaceCraft,Containership}from './base-ships'


//pode ser usado export no inicio da classe
export class MillenniumFalcon extends SpaceCraft implements Containership {
    
    
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
    //Export usado para definir como modulo exportar, normalmente é usado um tipo por modulo. Mas pode acontecer
    // de ter mais de um.
