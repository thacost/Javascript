const quaseArray = {0: 'Thales', 1:'Tamires', 2:'Natália'};
console.log(quaseArray);
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
});
console.log(quaseArray[0]);

const meuArray = ['Thales', 'Marlene', 'Marcos'];
console.log(quaseArray.toString(), meuArray);