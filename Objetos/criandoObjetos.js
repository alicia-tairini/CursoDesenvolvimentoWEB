// notação  literal

const obj1 = {
}
console.log(obj1)

//object em js

console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//função contrutora

function Produto(nome, preco, desc){

    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1-desc)
    }
}

const p1 = new Produto('Caneta', 1.99, 0,5)
const p2 = new Produto('Copo', 8.00, 0.2)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory 

function criarFuncionario(nome, salariobase, faltas){
    return{
        nome,
        salariobase,
        faltas,
        getsalario(){
          return(salariobase / 22) * ( 22 - faltas)
        }
    }
}
 const f1=  criarFuncionario('Alicia', 1000, 2)
 const f2= criarFuncionario('Bia', 1000.42, 2)

 console.log(f1.getsalario(), f2.getsalario())



