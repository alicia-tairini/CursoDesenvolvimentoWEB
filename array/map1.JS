let nuns = [2, 4, 5,10]

let resultado = nuns.map(function(e){
    return 2 * e 
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3 
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado  = nuns.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)