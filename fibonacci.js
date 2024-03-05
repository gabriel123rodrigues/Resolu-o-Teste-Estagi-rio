let numero = Math.floor(Math.random() * 100) + 1;

function fibonacciSequence(num) {

    let fibonacci = [0, 1];

    while (fibonacci[fibonacci.length - 1] <= num) {
        let nextFib = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        fibonacci.push(nextFib);
    }

    if (fibonacci.includes(num)) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} não pertence à sequência de Fibonacci.`;
    }
}

console.log(fibonacciSequence(numero));
