const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.

console.log("Earned amount:");
console.log("Bubblegum: $202");
console.log("Toffee: $118");
console.log("Ice cream: $2250");
console.log("Milk chocolate: $1680");
console.log("Doughnut: $1075");
console.log("Pancake: $80");
console.log();
const totalIn = 202 + 118 + 2250 + 1680 + 1075 + 80;
console.log("Income: $" + totalIn);

console.log('Staff expenses:');
const staffExp = Number(input());
console.log('Other expenses:');
const otherExp = Number(input());

const netExp = totalIn - staffExp - otherExp;
console.log("Net income: $" + netExp);