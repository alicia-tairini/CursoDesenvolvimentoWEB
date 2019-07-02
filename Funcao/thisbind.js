const pessoa = {
    saudacao: 'Bom dia!!',
    falar() {
        console.log(this.saudacao)
    }
}

const falapessoa = pessoa.falar.bind(pessoa)
falapessoa()