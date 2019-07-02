// estrategia 1 para gerar  valor padão
function soma1(a,b,c){
a = a || 1
b = b || 1
c= c || 1
return a + b +c
}

console.log(soma1(2), soma1(3,2,4))

// estrategia 2, 3 ,4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 !== arguments ? b :1
    c = isNaN(c) ?1:c
    return a + b + c 
}
console.log(soma2(5,8,9))

// estrategia 3 para gerar valor padrÃO (usar essa)

function soma3(a=3, b=0, c=10){
    return(a+b+c)
}
console.log(soma3())
