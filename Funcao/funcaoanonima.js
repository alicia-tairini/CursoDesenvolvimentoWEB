const soma= function(x,y){

    return x+y
}

const imprimiresult= function(a, b, operacao=soma){
    console.log(operacao(a,b))
}

imprimiresult(4,3)
imprimiresult(4,2,soma)
imprimiresult(4,3,function(x,y){
    return(x - y)
})

let falar
const pessoa ={
    falar: function() {
    console.log('Bom dia')  
    }
}

pessoa.falar()



