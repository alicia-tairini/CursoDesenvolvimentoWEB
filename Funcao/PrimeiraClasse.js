// CRIANDO DE FORMA LITETAL
function fun1(){}

//ARMAZENANDO EM UMA VARIAVEL
const fun2 = function(){}

//ARMAZENANDO EM UM ARRAY
const array = [function(a,b){return a+b}, fun1, fun2] 
console.log(array[0](2, 3))

//ARMAZENANDO EM UM ATRIBUTO DO OBJ
const obj= {}
obj.falar= function(){
    return("Ola!!")
}
console.log(obj.falar())

//Passar função como parametro
function teste(niver){
    niver()
}
teste(function(){
    console.log("Parabéns!!")
})