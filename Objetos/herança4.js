function MeuObejeto(){
    console.log(MeuObejeto.prototype)
}

const obj1 = new MeuObejeto
const obj2 = new MeuObejeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObejeto.prototype ===obj1.__proto__)

MeuObejeto.prototype.nome = 'Anonimo'
MeuObejeto.prototype.falar = function(){
    console.log(`Olá, meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafa'
obj2.falar()



