// ==========================
// MODO ESCURO
// ==========================

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icone = botaoTema.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icone.classList.remove("fa-moon");
        icone.classList.add("fa-sun");
    } else {
        icone.classList.remove("fa-sun");
        icone.classList.add("fa-moon");
    }
});

// ==========================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ==========================

const elementos = document.querySelectorAll("section, .card, .avaliacoes div");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = "1";
            entrada.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {
    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(40px)";
    elemento.style.transition = "0.8s ease";

    observador.observe(elemento);
});

// ==========================
// BOTÃO DE RESERVA
// ==========================

const reserva = document.querySelector("#contato .botao");

reserva.addEventListener("click", () => {
    alert("Sua solicitação de reserva foi enviada! Em breve entraremos em contato.");
});

// ==========================
// MENU ATIVO
// ==========================

const links = document.querySelectorAll(".menu a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("ativo"));
        link.classList.add("ativo");
    });
});

// ==========================
// MENSAGEM DE BOAS-VINDAS
// ==========================

window.addEventListener("load", () => {
    console.log("Bem-vindo ao Restaurante Sabor & Arte!");
});