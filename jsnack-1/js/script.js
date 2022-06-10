// array vuoto
let array = []

// for(i = 0; userNum < 50; i++)
let userSum = 0;

while (userSum < 50) {

    let userNumber = prompt("dimmi dei numeri");

    userNumber = parseInt(userNumber)

    userSum += userNumber;

    array.push(userNumber);
}

console.log(array)