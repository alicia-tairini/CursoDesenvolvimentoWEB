const valores = [1,2,3,4,5]
console.log(valores[0], valores[4])

//Colocando uma posição a mais no vetor
valores[5]= 6
console.log(valores)
console.log(valores.length)
console.log(valores)

console.log(valores.push(1, "a", 2))
console.log(valores)

console.log("-------------------")
console.log(valores.pop())
console.log(valores)

console.log("-------------------")
delete valores[0]
console.log(valores)