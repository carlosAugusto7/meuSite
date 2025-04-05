function enviar() {
  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  // Nome
  if (nome.indexOf(" ") === -1) {
    mostrarModal(
      "Por favor, insira seu nome completo (pelo menos duas palavras)."
    );
    return;
  }

  // Email
  let pA = email.indexOf("@");
  let pP = email.indexOf(".", pA + 2);

  if (pA === -1 || pP === -1) {
    mostrarModal(
      "Por favor, insira um e-mail válido que contenha '@' e '.' com ao menos um caractere entre eles."
    );
    return;
  }

  // Mensagem
  if (mensagem.length < 10 || mensagem.length > 500) {
    mostrarModal("A mensagem deve conter entre 10 e 500 caracteres.");
    return;
  }

  // Validacao do radio button
  const tipoContato = document.querySelector(
    'input[name="tipoContato"]:checked'
  );
  if (!tipoContato) {
    mostrarModal("Por favor, selecione o tipo de contato.");
    return;
  }

  // Exibe sucesso
  document.getElementById("resposta").innerText =
    "Formulário enviado com sucesso!";
}

function mostrarModal(message) {
  // Exibe a mensagem no modal
  document.getElementById("modalMessage").innerText = message;

  // Mostra o modal
  document.getElementById("meuModal").style.display = "block";
}

// Fecha o modal no x
document.querySelector(".fechar").addEventListener("click", function () {
  document.getElementById("meuModal").style.display = "none";
});

//Acorddion
document.querySelectorAll(".accordion .titulo").forEach((titulo) => {
  titulo.addEventListener("click", function () {
    const item = this.closest(".accordion .item");

    // Fechar todos os outros itens
    document.querySelectorAll(".accordion .item").forEach((i) => {
      if (i !== item) {
        i.classList.remove("ativo");
        i.querySelector(".conteudo").style.maxHeight = "0"; // Fecha o conteúdo
      }
    });

    // Alterna o estado do item clicado
    item.classList.toggle("ativo");

    const conteudo = item.querySelector(".conteudo");
    if (item.classList.contains("ativo")) {
      conteudo.style.maxHeight = conteudo.scrollHeight + "px"; // Abre o conteúdo
    } else {
      conteudo.style.maxHeight = "0"; // Fecha o conteúdo
    }
  });
});

//Dropdown
// Função para alternar a exibição do dropdown
function alternarDropdown() {
  const dropdown = document.querySelector(".opcoes-dropdown");
  const seta = document.getElementById("seta");
  dropdown.classList.toggle("show"); // Alterna a visibilidade do dropdown
  seta.classList.toggle("rotacionada"); // Rotaciona a seta
}

// Função para selecionar uma opção no dropdown
function selecionarOpcao(opcaoTexto) {
  const opcaoSelecionada = document.getElementById("opcao-selecionada");
  opcaoSelecionada.textContent = opcaoTexto; // Atualiza o texto do seletor com o texto da opção clicada
  alternarDropdown(); // Fecha o dropdown após a seleção
}
