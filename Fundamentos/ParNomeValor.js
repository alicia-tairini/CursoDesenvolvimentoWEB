const saudacao = 'Opa'

function exc() {
    const saudacao = 'fala'
    return saudacao
}

const cliente ={
    nome: 'Alicia',
    idade: 13,
    edereco: {
        rua: 'Esperança',
        cidade: 'Cachoeira'
    }
}

console.log(saudacao)
console.log(exc())

console.log(cliente)