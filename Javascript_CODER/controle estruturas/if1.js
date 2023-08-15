function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota);
    }
};

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdade(valor){
    if(valor){
    console.log('É verdade.... ' + valor)};
};

seForVerdade();
seForVerdade(null);
seForVerdade(undefined);
seForVerdade('');
seForVerdade(0);
seForVerdade(NaN);
seForVerdade(3);
seForVerdade(' ');
seForVerdade(1.3);
seForVerdade([]);
seForVerdade([1, 3]);