const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


const notasBaixas2 = notas.filter(function (nota){
    return nota  < 7
})
console.log(notasBaixas2)

const notasMenor7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenor7)
console.log(notasBaixas3)




const preco = [10.3, 5.7, 30.1, 13.5, 4.2, 7.3, 99.1, 65.1, 3.2]

let precoBaixo = []
for (let i in preco){
    if(preco[i] > 20){
        precoBaixo.push(preco[i])}
}
console.log(precoBaixo)

let precoBaixo2 = preco.filter(function(preco){
    return preco > 20
})
console.log(precoBaixo2)

const precoAcima20 = preco => preco > 20
let precoBaixo3 = preco.filter(precoAcima20)
console.log(precoBaixo3)


