const calcularGorjeta = (valorConta, qualidadeServico) => valorConta * qualidadeServico;

const exibirResultado = (gorjeta) => {
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Gorjeta: R$ ${gorjeta.toFixed(2)}`;
};

document.getElementById("calcularBtn").addEventListener("click", () => {
    const valorConta = parseFloat(document.getElementById("valorConta").value);
    const qualidadeServico = parseFloat(document.getElementById("qualidadeServico").value);

    if (!isNaN(valorConta)) {
        const gorjeta = calcularGorjeta(valorConta, qualidadeServico);
        exibirResultado(gorjeta);
    } else {
        exibirResultado(0);
    }
});
