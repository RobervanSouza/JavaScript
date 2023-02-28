numerosPrimos(12);
function numerosPrimos(numeros) {
    for(let numero = 2; numero <= numeros; numero++) {
        let primo = 0;
        for( let dividi = 2; dividi < numero; dividi++) {
            if(numero % dividi === 0){
                primo = false;
                break;
            }

        }
        if(primo){
           

        }
    }
}