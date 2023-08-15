// Factory Simples

function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva',
        idade: 20
    }
}

console.log(criarPessoa())

function criarProduto(nome, categoria, preco) {
    return{
        nome,
        categoria ,
        preco,
        desconto: 0.4
    }
}

console.log(criarProduto('Notebook', 'Tecnologia', 2500.00))
console.log(criarProduto('Smartphone', 'Tecnologia', 3000.10))


function criarComputador(processador, placaMae, memRam, placaVga, fonte) {
    return {
        processador,
        placaMae,
        memRam,
        placaVga,
        fonte
    }

}

console.log(criarComputador('Intel 13° Geração', 'ASUS TUF Gaming', '32GB', 'RTX 4070 MSI', 'Corsair 1200XT'))

function criarPessoa2(nome, sobrenome, idade, peso, altura) {
    return { 
        nome,
        sobrenome,
        idade,
        peso,
        altura
    }
    
}

console.log(criarPessoa2('Thales', 'Costa', 28, 96.5, 1.82))