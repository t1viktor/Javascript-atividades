function calcularFatorial(n) {
    if (n < 0) {
        return "Número deve ser um inteiro positivo.";
    }
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function calcularFibonacci(n) {
    if (n < 0) {
        return "Número deve ser um inteiro positivo.";
    }
    const fibonacci = [0, 1];
    while (fibonacci[fibonacci.length - 1] <= n) {
        let próximo = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
        if (próximo > n) break;
        fibonacci.push(próximo);
    }
    return fibonacci;
}

let numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (!isNaN(numero) && numero >= 0) {
    console.log(`Fatorial de ${numero}: ${calcularFatorial(numero)}`);
    console.log(`Sequência de Fibonacci até ${numero}: ${calcularFibonacci(numero).join(', ')}`);
} else {
    console.log("Por favor, insira um número inteiro positivo.");
}
