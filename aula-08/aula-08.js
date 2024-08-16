const converterUnidade = (valorMetros, unidadeDestino) => {
    const conversoes = {
        jarda: valorMetros * 1.094,
        pe: valorMetros * 3.281,
        polegada: valorMetros * 39.37,
        milha: valorMetros * 0.000621
    };
    return conversoes[unidadeDestino];
};

const exibirResultado = (valorConvertido, unidadeDestino) => {
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Resultado: ${valorConvertido.toFixed(4)} ${unidadeDestino}(s)`;
};

document.getElementById("converterBtn").addEventListener("click", () => {
    const valorMetros = parseFloat(document.getElementById("valorMetros").value);
    const unidadeDestino = document.getElementById("unidadeDestino").value;

    if (!isNaN(valorMetros)) {
        const valorConvertido = converterUnidade(valorMetros, unidadeDestino);
        exibirResultado(valorConvertido, unidadeDestino);
    } else {
        exibirResultado(0, unidadeDestino);
    }
});
