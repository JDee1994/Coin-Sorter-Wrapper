let pennyValue =  0.01;
let nickelValue = 0.05;
let dimeValue = 0.10;
let quarterValue = 0.25;

let pennyTotal = prompt("Enter total amount of pennies");
let nickelTotal = prompt("Enter total amount of nickels");
let dimeTotal = prompt("Enter total amount of dimes");
let quarterTotal = prompt("Enter total amount of quarters");

let pennySum = pennyTotal * pennyValue;
let nickelSum = nickelTotal * nickelValue;
let dimeSum = dimeTotal * dimeValue;
let quarterSum = quarterTotal * quarterValue;
let Total = pennySum + nickelSum + dimeSum + quarterSum;
console.log("Total dollar amount of all coins is $", (Total.toFixed(2)));




let pennyWrap = 50;
let nickelWrap = 40;
let dimeWrap = 50;
let quarterWrap = 40;


let pennyWrapNumber = Math.floor(pennyTotal / pennyWrap);
let nickelWrapNumber = Math.floor(nickelTotal / nickelWrap);
let dimeWrapNumber = Math.floor(dimeTotal / dimeWrap);
let quarterWrapNumber = Math.floor(quarterTotal / quarterWrap);

console.log("This is the number of penny wrappers ", (pennyWrapNumber));
console.log("This is the number of nickel wrappers ", (nickelWrapNumber));
console.log("This is the number of dime wrappers ", (dimeWrapNumber));
console.log("This is the number of quarter wrappers ", (quarterWrapNumber));



let pennyRemainder = pennyTotal % pennyWrap;
let nickelRemainder = nickelTotal % nickelWrap;
let dimeRemainder = dimeTotal % dimeWrap;
let quarterRemainder = quarterTotal % quarterWrap;

console.log("Remainder of pennies is ", (pennyRemainder));
console.log("Remainder of nickels is ", (nickelRemainder));
console.log("Remainder of dimes is ", (dimeRemainder));
console.log("Remainder of quarters is ", (quarterRemainder));



let pennyRemainderValue = pennyRemainder * pennyValue;
let nickelRemainderValue = nickelRemainder * nickelValue;
let dimeRemainderValue = dimeRemainder * dimeValue;
let quarterRemainderValue = quarterRemainder * quarterValue;

console.log("The total of pennies leftover is $", (pennyRemainderValue.toFixed(2)));
console.log("The total of nickels leftover is $", (nickelRemainderValue.toFixed(2)));
console.log("The total of dimes leftover is $", (dimeRemainderValue.toFixed(2)));
console.log("The total of quarters leftover is $", (quarterRemainderValue.toFixed(2)));