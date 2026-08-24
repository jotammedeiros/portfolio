

const botaoMenu = document.getElementById("botaoMenu");
const menu = document.getElementById("menu");
const botaoTema = document.getElementById("botaoTema");


if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", () => {
        menu.classList.toggle("aberto");
    });
}


if (menu) {
    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("aberto");
        });
    });
}


if (botaoTema) {
    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("tema-escuro");
        botaoTema.textContent = "☀";
    }

    botaoTema.addEventListener("click", () => {
        document.body.classList.toggle("tema-escuro");

        const escuro = document.body.classList.contains("tema-escuro");
        localStorage.setItem("tema", escuro ? "escuro" : "claro");
        botaoTema.textContent = escuro ? "☀" : "☾";
    });
}


const formulario = document.getElementById("formContato");

if (formulario) {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const mensagem = document.getElementById("mensagem");

        const erroNome = document.getElementById("erroNome");
        const erroEmail = document.getElementById("erroEmail");
        const erroMensagem = document.getElementById("erroMensagem");
        const mensagemSucesso = document.getElementById("mensagemSucesso");

        
        erroNome.textContent = "";
        erroEmail.textContent = "";
        erroMensagem.textContent = "";
        mensagemSucesso.textContent = "";

        let formularioValido = true;

        if (nome.value.trim() === "") {
            erroNome.textContent = "Informe seu nome.";
            formularioValido = false;
        }

       
        const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoEmail.test(email.value.trim())) {
            erroEmail.textContent = "Informe um e-mail válido.";
            formularioValido = false;
        }

        if (mensagem.value.trim() === "") {
            erroMensagem.textContent = "Digite uma mensagem.";
            formularioValido = false;
        }

        if (formularioValido) {
           
            mensagemSucesso.textContent = "Mensagem enviada com sucesso!";
            formulario.reset();
        }
    });
}
