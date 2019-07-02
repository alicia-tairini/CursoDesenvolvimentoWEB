const pessoa = {
    nome: 'Marcos',
    idade: 26,
    endereco: {
        Rua: 'N sei',
        Cidade: "Bh"
    }
}

const {nome,idade} = pessoa
console.log(nome,idade)

const {endereco: {Rua, Cidade} } = pessoa
console.log(Rua,Cidade)