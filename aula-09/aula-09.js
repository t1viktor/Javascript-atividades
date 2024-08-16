const adicionarNota = () => {
    const novaNota = document.getElementById("novaNota").value;
    if (novaNota.trim() !== "") {
        const listaDeNotas = document.getElementById("listaDeNotas");

        const li = document.createElement("li");
        li.textContent = novaNota;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.className = "deleteBtn";
        deleteBtn.addEventListener("click", () => {
            listaDeNotas.removeChild(li);
        });

        li.appendChild(deleteBtn);
        listaDeNotas.appendChild(li);

        document.getElementById("novaNota").value = "";
    }
};

document.getElementById("adicionarBtn").addEventListener("click", adicionarNota);

document.getElementById("novaNota").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        adicionarNota();
    }
});
