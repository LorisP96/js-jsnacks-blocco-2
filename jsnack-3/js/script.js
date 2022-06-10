// - Il software deve chiedere per 5 volte all’utente
//  di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let userNumber = 0;

let sum = 0;

///////////////////////// FOR ///////////////////////////////

// for(let i = 1; i <= 5; i++) {

//     userNumber = parseInt(prompt('dimmi 5 numeri'));
    
//     sum += userNumber;
    
// }

// console.log(sum);

///////////////////////// WHILE ///////////////////////////////

let i = 0;

while (i < 5) {

    userNumber = parseInt(prompt('dimmi 5 numeri'));

    sum += userNumber;

    i++;
}


console.log(sum);