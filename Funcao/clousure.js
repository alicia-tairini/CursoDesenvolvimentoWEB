const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
 
    }
return x
}

const minhafuncao = fora()
console.log(minhafuncao)