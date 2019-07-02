//Operadores aritmeticos
const [a,b,c,d] = [24,12,38,29]

const soma = a + b + c + d
const subtracao = c - a 
const multiplicacao = b * d
const divicao = a / b
const modulo = c % 2
console.log(soma, subtracao, multiplicacao, divicao, modulo)

//operadores relacionas 
console.log('Ex 1)', '3'== 3) /* aqui ele compara somente o valor */
console.log('Ex 2)', '3'=== 3) /* aqui ele compara o valor e o tipo, ou seja string e number são diferentes*/


//operadores logicos
function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32= !!(trabalho1 ^ trabalho2) 
    const manterSaudavel = !comprarSorvete

    return{comprarSorvete: comprarSorvete,comprarTV32,comprarTV50,manterSaudavel}
}

console.log(compras(true,false))
console.log(compras(true,true))
console.log(compras(false,false))
