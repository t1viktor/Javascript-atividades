const perguntas = [
    {
        pergunta: "Quem foi o primeiro presidente dos Estados Unidos?",
        opcoes: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual país é conhecido como a 'terra do sol nascente'?",
        opcoes: ["China", "Japão", "Coreia do Sul", "Vietnã"],
        respostaCorreta: 1
    },
    {
        pergunta: "Quem escreveu a peça 'Romeu e Julieta'?",
        opcoes: ["Charles Dickens", "Friedrich Schiller", "Victor Hugo", "William Shakespeare"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual é o elemento químico representado pelo símbolo 'O'?",
        opcoes: ["Ouro", "Osmio", "Oxigênio", "Óxido"],
        respostaCorreta: 2
    }
];

let perguntaAtual = perguntas[Math.floor(Math.random() * perguntas.length)];

document.getElementById("question").textContent = perguntaAtual.pergunta;

const botoes = document.querySelectorAll(".options button");
botoes.forEach((botao, index) => {
    botao.textContent = perguntaAtual.opcoes[index];
});

function checkAnswer(index) {
    const feedback = document.getElementById("feedback");
    if (index === perguntaAtual.respostaCorreta) {
        feedback.textContent = "Acertou!!!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = `Errado! A resposta correta é: ${perguntaAtual.opcoes[perguntaAtual.respostaCorreta]}`;
        feedback.style.color = "red";
    }
    document.getElementById("reloadBtn").style.display = "block";
    botoes.forEach(botao => botao.disabled = true);
}
