// DOM ELEMENTS — make them globally accessible
window.emailInput = document.getElementById('email');
window.passwordInput = document.getElementById('password');
window.loginBtn = document.getElementById('loginBtn');
window.registerBtn = document.getElementById('registerBtn');
window.logoutBtn = document.getElementById('logoutBtn');
window.siteInput = document.getElementById('site');
window.usernameInput = document.getElementById('username');
window.passwordValueInput = document.getElementById('passwordValue');
window.savePasswordBtn = document.getElementById('savePassword');
window.passwordList = document.getElementById('passwordList');
window.searchInput = document.getElementById('search');
window.messageContainer = document.getElementById('message-container');
window.vaultMessageContainer = document.getElementById('vault-message-container');

window.showMessage = function (message, type) {
  const msgContainer =
    document.getElementById('message-container') ||
    document.getElementById('vault-message-container');

  if (!msgContainer) return; // evita l'errore se mancano entrambi

  msgContainer.innerHTML = `<p class="${type}">${message}</p>`;
  setTimeout(() => (msgContainer.innerHTML = ''), 4000);
};
 