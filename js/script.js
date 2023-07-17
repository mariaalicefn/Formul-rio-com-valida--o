// Seleção de elementos

const botao = document.getElementById("confirmBtn");
const formulario = document.getElementById("form");
const modal = document.getElementById("myModal");
const modalMessage = document.getElementById("modalMessage");
const closeBtn = document.querySelector(".close");

// Função para abrir o modal

function showModal(message) {
    modalMessage.innerText = message;
    modal.style.display = "flex";
}

// Função para fechar o modal

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})

//Função para validação do formulário

botao.addEventListener("click", (e) => {
    e.preventDefault();
    
    const nameRegex = /[A-Za-z\s]{10}/;
    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    const senhaRegex = /[A-Za-z]{8}/;
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;
    const senhaInput = document.getElementById("senha").value;
    const confirmInput = document.getElementById("confirmSenha").value;

    if (nameInput === "") {
        showModal("Por favor, preencha o campo nome");
        return
    } else if (!nameRegex.test(nameInput)) {
        showModal("Por favor o nome deve ter no mínimo 15 caracteres alfabéticos");
        return
    } else if (emailInput === "") {
        showModal("Preencha o campo email");
        return
    } else if (!emailRegex.test(emailInput)) {
        showModal("Por favor, insira um endereço de e-mail válido.");
        return
    } else if (senhaInput === "") {
        showModal("Preencha o campo senha");
        return
    } else if (confirmInput === "") {
        showModal("Preencha o campo confirmar senha");
        return
    } else if (!senhaRegex.test(senhaInput)) {
        showModal("A senha deve conter 8 caracteres alfabéticos");
        return
    } else if (senhaInput != confirmInput) {
        showModal("Os campos senha e confirmar senha devem ser iguais")
        return
    }
})