// - Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

let firstArray = [1, 2, 3, 4, 5];

let secondArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(secondArray);


while (!(firstArray.length === secondArray.length)) {

    let randomNum = Math.floor(Math.random() * 101);

    firstArray.push(randomNum);

}

console.log(firstArray);