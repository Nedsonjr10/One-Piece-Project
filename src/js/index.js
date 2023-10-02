const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        uncheckbutton();
        unmarkcharacter();

        botao.classList.add("selecionado");
        personagens[index].classList.add("selecionado");
    });
});

function uncheckbutton() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

function unmarkcharacter() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}