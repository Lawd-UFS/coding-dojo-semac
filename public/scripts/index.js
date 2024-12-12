// Seleciona os elementos necessários
const history = document.querySelector('.history');
const toggleButton = document.querySelector('.toggle-history');

// Adiciona evento de clique ao botão para abrir/fechar o histórico
toggleButton.addEventListener('click', () => {
  const isOpen = history.classList.contains('open');

  // Alterna a classe "open" para mostrar/ocultar o histórico
  if (isOpen) {
    history.classList.remove('open');
    history.classList.add('closed');
    toggleButton.classList.remove("on")  
    toggleButton.classList.add("off"); // Move botão para direta
    toggleButton.innerHTML = '&lt;'; // Atualiza a seta (para esquerda)
  } else {
    history.classList.remove('closed');
    history.classList.add('open');
    toggleButton.classList.remove("off");
    toggleButton.classList.add("on"); // Move botão para esquerda
    toggleButton.innerHTML = '&gt;'; // Atualiza a seta (para direita)
  }
});
