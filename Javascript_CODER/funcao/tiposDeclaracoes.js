console.log(soma(3, 4)) // POSSO CHAMAR ANTES POIS O JS CARREGA ESTE TIPO ANTECIPADO
// function declaration PODE SER CHAMADA ANTES, 
// POIS O JS CARREGA ESTE TIPO DE FUNC ANTES
function soma(x, y) {
    return x + y
}

// function expression ESTE TIPO FUNCAO SO PODE SER CHAMADA DEPOIS DE SER DECLARADA
const subtracao = function (x, y) {
    return x - y
}
console.log(subtracao(3, 10)) // SO APOS SER DECLARADA QUE PODEMOS CHAMA-LA

// named function expression
const multi = function multi(x, y) {
    return x * y
}
console.log(multi(3, 5)) // FUNC EXPRESSION SO É CHAMADA DEPOIS DE DECLARADA