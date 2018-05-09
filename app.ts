let message: string = "Helpme, Obi-Wan Kenobi. You 're my only hope!"
console.log(message)

let episode: number =4
console.log(episode)

episode= episode + 1
console.log(episode)

episode = episode + '4'

console.log("Novo episode" + episode)

//Funções e suas implementações.
let isEnoughToBeatMF = function(parsecs: number): boolean{

    return parsecs < 12
}

let distance = 5

console.log(`Is ${distance} parsec enougt to beat Million Falcon? ${isEnoughToBeatMF(distance) ? 'YES': 'NO'}`)

//EUROFunction é uma forma enxuta de escrever
let call = (name:string)=> console.log(`Do you copy,${name}?`)

call('R2')

//Paramentros padroões

function inc(speed: number,inc:number=1 ): number {
 return speed + inc
}
console.log('Testando funções')

console.log(`inc(5,1)=${inc(5,1)}`)

console.log(`inc(5)=${inc(5)}`)