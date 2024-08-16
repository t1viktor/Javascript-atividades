const adicionarTarefa = () => {
    const novaTarefa = document.getElementById("novaTarefa").value;
    if (novaTarefa.trim() !== "") {
        const listaDeTarefas = document.getElementById("listaDeTarefas");

        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(novaTarefa));

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Excluir";
        deleteBtn.className = "deleteBtn";
        deleteBtn.addEventListener("click", () => {
            listaDeTarefas.removeChild(li);
        });

        li.appendChild(deleteBtn);
        listaDeTarefas.appendChild(li);

        document.getElementById("novaTarefa").value = "";
    }
};

document.getElementById("adicionarBtn").addEventListener("click", adicionarTarefa);

document.getElementById("novaTarefa").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});
