const notas = [7.9, 8.0, 6.9, 7.5, 6.0, 5.7]

//sem callback

const notasbaixas1 = []
for (let i in notas){
    if (notas[i] <7){
        notasbaixas1.push(notas[i])
    }
}

console.log(notasbaixas1)

// com callback
const notasbaixas2 = notas.filter(function (nota) {
    return nota < 7
})

const notasbaixas3 = notas.filter(nota => nota < 7)
console.log(notasbaixas3)
