
const array1 = [15, 2, 7];
const array2 = [5];

// Prendiamo un altra variabile e calcoliamo qual e dei due array piu piccolo

let count = array1.length - array2.length;

// Se ad esempio e negativo 

if(count < 0){
    // concateniamo 
    for(let i = array1.length; i < array2.length; i++){
        array2[i] = array1[i];
    }
    
}else{
    for(let i = array2.length; i < array1.length; i++){
        array1[i] = array2[i];
    }
}

