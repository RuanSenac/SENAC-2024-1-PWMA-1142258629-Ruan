document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'seu_usuario' && password === 'sua_senha') {
        // Login bem-sucedido, redirecione o usuário para a página de perfil
        window.location.href = 'pagina_de_perfil.html';
    } else {
        // Exiba uma mensagem de erro
        document.getElementById('login-error-message').innerText = 'Credenciais inválidas. Por favor, tente novamente.';
    }
});
 
// Lógica para enviar o formulário de contato
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var message = document.getElementById('message').value;
    // Aqui você pode implementar a lógica para enviar a mensagem de contato, como enviar por e-mail ou salvar em um banco de dados
    // Por agora, vamos apenas exibir uma mensagem de sucesso
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
});

