
let array1 = [15, 2, 7];
let array2 = [5 , 5 , 5 , 5];

// Prendiamo un altra variabile e calcoliamo qual e dei due array piu piccolo

let count = array1.length - array2.length;

// Se ad esempio e negativo 

if(count < 0){
    // concateniamo 
    for(let i = array1.length; i < array2.length; i++){
        array1.push(array2[i]);
    }
    
}else{
    for(let i = array2.length; i < array1.length ; i++){
        array2.push(array1[i]);
    }
}

console.log(array2);
console.log(array1);

