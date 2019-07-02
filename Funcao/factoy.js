 // Factoy sempre retorna um objeto.

 function pessoa1(){
     return{
         nome: 'Alicia',
         Sobrenome: 'Tairini'
     }
 }


 // exemplo 2

 function pessoa2 (nome, idade, apelido){
    return{
    nome, 
    idade,
    apelido
    }
 }

console.log(pessoa2 ('Alicia', '20', 'Li'))

 