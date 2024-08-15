let numEstudantes = parseInt(prompt("Digite o número total de estudantes na turma:"));
let somaNotas = 0;
let maiorNota = -Infinity;
let menorNota = Infinity;

let i = 0;
while (i < numEstudantes) {
    let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
    somaNotas += nota;
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota;
    }
    i++;
}

let media = somaNotas / numEstudantes;

console.log("Média da turma: " + media.toFixed(2));
console.log("Maior nota: " + maiorNota);
console.log("Menor nota: " + menorNota);
