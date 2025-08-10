// This loop prints all even numbers between 1 and 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum);

let n = 5; // user input
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}

let str = "JavaScript";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);


let a = 0, b = 1;
for (let i = 1; i <= 10; i++) {
    console.log(a);
    let temp = a + b;
    a = b;
    b = temp;
}

for (let num = 2; num <= 50; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}
