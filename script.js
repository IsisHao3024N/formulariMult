let passoAtual = 0;
const partes = document.querySelectorAll(".part");

function mostrarParte(n) {
    partes.forEach(part => part.classList.remove("active"));
    partes[n].classList.add("active");
}

document.querySelectorAll(".next").forEach(btn => {
    btn.addEventListener("click", () => {
        if (passoAtual < partes.length - 1) {
            passoAtual++;
            mostrarParte(passoAtual);
        }
    });
});

document.querySelectorAll(".prev").forEach(btn => {
    btn.addEventListener("click", () => {
        if (passoAtual > 0) {
            passoAtual--;
            mostrarParte(passoAtual);
        }
    });
});