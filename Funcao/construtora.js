function carro(velocidademax= 200, delta = 5){
    //atribudo interno
    let velocidadeatual = 0


    // metodo publico
    this.acelar = function(){
         if(velocidadeatual + delta <= velocidademax){
            velocidadeatual =+ delta
        }
        else{
            velocidadeatual = velocidademax
        }
    }   

    this.getvelocidadeatual = function (){
        return velocidadeatual
    }
}

const uno = new carro
uno.acelar()
console.log(uno.getvelocidadeatual())

const ferrari = new carro(350,29)
ferrari.acelar()
console.log(ferrari.getvelocidadeatual())

