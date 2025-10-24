// Menu Mobile
const menuToggle = document.getElementById('menu-toggle');
const menuList = document.getElementById('menu-list');

menuToggle.addEventListener('click', () => {
  menuList.classList.toggle('ativo');
});

// Validação e Toasts
const form = document.getElementById('formCadastro');
const toast = document.getElementById('toast');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input[required]');
    let valido = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        input.classList.add('input-invalido');
        valido = false;
      } else {
        input.classList.remove('input-invalido');
      }
    });

    if (!valido) {
      mostrarToast('Por favor, preencha todos os campos obrigatórios.', 'erro');
      return;
    }

    mostrarToast('Cadastro enviado com sucesso! 💚', 'sucesso');
    form.reset();
  });
}

// Função Toast
function mostrarToast(mensagem, tipo = 'info') {
  toast.textContent = mensagem;
  toast.className = `toast toast--${tipo} toast--show`;
  setTimeout(() => (toast.className = 'toast'), 3000);
}
