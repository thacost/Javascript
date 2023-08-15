
function getInteiroValor (min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
};

let opcao = -1;

while( opcao != -1){
    opcao = getInteiroValor(-1, 10)
    console.log(`Opção de entrada foi ${opcao}`)
}

console.log('Até a proxima');