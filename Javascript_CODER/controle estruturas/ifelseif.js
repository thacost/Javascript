Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
};

const imprimirResultado =  function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra!')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado!')
    } else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else {
        console.log('Nota inválida')
    }

};

imprimirResultado(10);
imprimirResultado(8.99);
imprimirResultado(6.55);
imprimirResultado(2.3);
imprimirResultado(-3);
imprimirResultado(11);


const desconto = function (valor) {
    if (valor >= 20){
        console.log('Desconto de 20%')
    } else if (valor >= 15){
        console.log('Desconto de 15%')
    } else if (valor >= 10){
        console.log('Desconto de 10%')
    } else if (valor >= 5) {
        console.log('Desconto de 5%')
    } else {
        console.log('Não possui desconto')
    }
}

desconto(30);
desconto(20);
desconto(17);
desconto(15);
desconto(13);
desconto(10);
desconto(7);
desconto(5);
desconto(3);


const mediaGols = function (gol) {
    if (gol > 30){
        console.log('Artilheiro Unico')
    } else if (gol >= 20){
        console.log('Artilheiro Padrão')
    } else if (gol >= 10){
        console.log('Artilheiro Normal')
    } else {
        console.log('Bagre')
    }

};

mediaGols(40);
mediaGols(22);
mediaGols(15);
mediaGols(5);