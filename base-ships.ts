
//pode ser usado export no inicio da classe ou interface
class SpaceCraft{
    
        constructor(public propulsor: string){}
        
        jumpIntoHyperspace(){
            console.log(`Entering hyperspace with ${this.propulsor}`)
        }
    }

    interface  Containership{
        
          cargoContainers: number
      }
      //Exportando os arquivos :Normalmente é um tipo por modulo
      //é modulo quando usa export
      export{SpaceCraft,Containership}