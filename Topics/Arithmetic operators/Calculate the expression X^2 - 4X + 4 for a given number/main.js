const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});

// Creating the function that calculates the expression
function calculateExpression(x) {
    // TODO: Write the arithmetic expression here
    return x * x - 4 * x + 4;
}

// Reading the input from the user
rl.on('line', (input) => {
    const x = parseFloat(input);
    console.log(calculateExpression(x));
});