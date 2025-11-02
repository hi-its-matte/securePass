document.addEventListener('DOMContentLoaded', () => {
  // 🔹 FIX: collega gli input agli ID HTML
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const siteInput = document.getElementById('site');
  const usernameInput = document.getElementById('username');
  const passwordValueInput = document.getElementById('passwordValue');

  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const savePasswordBtn = document.getElementById('savePassword');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      login(email, password)
        .then(() => showMessage('Accesso effettuato', 'success'))
        .catch(err => showMessage(err, 'error'));
    });
  }

  if (registerBtn) {
    registerBtn.addEventListener('click', () => {
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      register(email, password)
        .then(() => showMessage('Registrato con successo! Ora puoi accedere.', 'success'))
        .catch(err => showMessage(err, 'error'));
    });
  }

  if (logoutBtn) logoutBtn.addEventListener('click', logout);

  if (savePasswordBtn) {
    savePasswordBtn.addEventListener('click', () => {
      const site = siteInput.value.trim();
      const username = usernameInput.value.trim();
      const pwd = passwordValueInput.value;
      savePassword(site, username, pwd)
        .then(() => showMessage('Password salvata!', 'success'))
        .catch(err => showMessage(err, 'error'));
    });
  }
});
