let nome = prompt("Digite o seu nome:");
let alturaCm = parseFloat(prompt("Digite a sua altura em centímetros:"));
let peso = parseFloat(prompt("Digite o seu peso em quilogramas:"));

let alturaM = alturaCm / 100;
let imc = peso / (alturaM * alturaM);

let classificacao;

if (imc < 16) {
    classificacao = "Baixo peso muito grave";
} else if (imc >= 16 && imc <= 16.99) {
    classificacao = "Baixo peso grave";
} else if (imc >= 17 && imc <= 18.49) {
    classificacao = "Baixo peso";
} else if (imc >= 18.5 && imc <= 24.99) {
    classificacao = "Peso normal";
} else if (imc >= 25 && imc <= 29.99) {
    classificacao = "Sobrepeso";
} else if (imc >= 30 && imc <= 34.99) {
    classificacao = "Obesidade grau I";
} else if (imc >= 35 && imc <= 39.99) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

console.log("Nome: " + nome);
console.log("IMC: " + imc.toFixed(2));
console.log("Classificação: " + classificacao);
