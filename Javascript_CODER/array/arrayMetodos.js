const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // remove o ultimo item do array
console.log(pilotos);

pilotos.push('Verstappen'); // adiciona um item no array, especificamente na ultima posição
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento da lista do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona um elemento no inicio da lista do array
console.log(pilotos);

// splice pode tanto adicionar, quanto remover um elemento no array
pilotos.splice(2, 0, 'Bottas', 'Massa'); // adicionar elemento usando splice
console.log(pilotos);

pilotos.splice(3, 1); // remover elemento usando splice
console.log(pilotos);


const algunsPilotos1 = pilotos.slice(2); // gera um novo array apartir do indice passado como parametro
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // gera um novo array iniciando indice 1 até indice 4, o indice 4 não entra
console.log(algunsPilotos2);

const carros = ['Gol', 'Uno', 'Onix', 'Polo', 'Argo'];
console.log(carros);

carros.pop();
console.log(carros);

carros.push('Argo');
console.log(carros);
carros.shift();
console.log(carros);
carros.unshift('Gol');
console.log(carros);
carros.splice(1, 0, 'Toro', 'Montana');
console.log(carros);
carros.splice(3, 1);
console.log(carros);