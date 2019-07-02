function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desconto) *  (1+imposto)}`
}

const  carro = {preco:50090, desconto: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//console.log(getPreco.call(carro, 0.17,'$'))
//console.log(getPreco.apply(carro,[0.1,'$']))