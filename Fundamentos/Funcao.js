// função sem retormo
function imprimirsoma(a,b){
    console.log(a+b)
}
imprimirsoma(4,9)

//função com retorno
function somar (a, b=0){
    return(a+b)
}
console.log(somar(9,3))
console.log(somar(8))