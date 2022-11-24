let n = 31052022;
// Write solution code here to find the lucky number
let sum = 0;
let sum1 = 0;
while (n != 0) {

    sum = (sum + (n % 10));
    n = parseInt(n / 10);
}
console.log(`calculate sum of digits of  =  ${sum}`);
while (sum != 0) {
    sum1 = (sum1 + (sum % 10));
    sum = parseInt(sum / 10);
}
console.log(`Your Lucky Number is ${sum1}`);