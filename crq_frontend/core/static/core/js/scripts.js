// Confirmação ao excluir
function confirmarExclusao() {
    return confirm("Tem certeza que deseja excluir este cadastro? Essa ação não pode ser desfeita.");
}

// Abrir modal
document.getElementById("btnAbrirModal").addEventListener("click", () => {
    const modal = document.getElementById("modalCadastro");
    modal.classList.add("show");
});

// Fechar modal
document.getElementById("fecharModal").addEventListener("click", () => {
    const modal = document.getElementById("modalCadastro");
    modal.classList.remove("show");
});

// Ocultar resultados de busca
const ocultarBtn = document.getElementById("btnOcultarResultados");
if (ocultarBtn) {
    ocultarBtn.addEventListener("click", () => {
        const resultados = document.getElementById("resultadosBusca");
        if (resultados) resultados.style.display = "none";
    });
}

// Mostrar ou ocultar os detalhes ao clicar no nome
document.querySelectorAll(".cadastro-nome").forEach(botao => {
    botao.addEventListener("click", () => {
        const id = botao.getAttribute("data-id");
        const detalhes = document.getElementById(`detalhes-${id}`);
        const icone = botao.querySelector(".seta");

        if (detalhes.style.display === "block") {
            detalhes.style.display = "none";
            icone.textContent = "▼";
        } else {
            detalhes.style.display = "block";
            icone.textContent = "▲";
        }
    });
});


// Fecha o modal ao pressionar ESC
document.addEventListener("keydown", function(event) {
    const modal = document.getElementById("modalCadastro");
    if (event.key === "Escape" && modal.classList.contains("show")) {
        fecharModalCadastro();
    }
});
// Fecha o modal ao pressionar ESC
document.addEventListener("keydown", function(event) {
    const modal = document.getElementById("modalCadastro");
    if (event.key === "Escape" && modal.classList.contains("show")) {
        fecharModalCadastro();
    }
});
