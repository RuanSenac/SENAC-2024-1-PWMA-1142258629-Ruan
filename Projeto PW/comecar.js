// Referências aos elementos HTML
const comecarButton = document.getElementById('comecarButton');
const modalCadastro = document.getElementById('modalCadastro');
const closeModal = document.getElementById('closeModal');
const projectForm = document.getElementById('projectForm');

// Evento de clique no botão "COMEÇAR"
comecarButton.addEventListener('click', () => {
  modalCadastro.style.display = 'block'; // Exibir o modal de cadastro
});

// Evento de clique no botão de fechar modal
closeModal.addEventListener('click', () => {
  modalCadastro.style.display = 'none'; // Ocultar o modal de cadastro
});

// Evento de envio do formulário de projeto
projectForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar o comportamento padrão de enviar o formulário
  
  // Obter valores do formulário
  const title = document.getElementById('projectTitle').value;
  const description = document.getElementById('projectDescription').value;

  // Armazenar projeto no Local Storage
  const project = {
    title,
    description
  };
  localStorage.setItem('projeto', JSON.stringify(project));

  // Limpar campos do formulário
  projectForm.reset();

  // Fechar o modal de cadastro
  modalCadastro.style.display = 'none';
});
