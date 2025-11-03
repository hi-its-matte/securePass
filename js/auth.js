// auth.js - Authentication (no email verification)

// --- LOGIN / REGISTER / LOGOUT ---
function login(email, password) {
  if (!email || !password) return Promise.reject('Inserisci email e password');
  return auth.signInWithEmailAndPassword(email, password);
}

function register(email, password) {
  if (!email || !password) return Promise.reject('Inserisci email e password');
  return auth.createUserWithEmailAndPassword(email, password);
}

function logout() {
  return auth.signOut();
}

// Esponi globalmente (usabile da HTML)
window.login = login;
window.register = register;
window.logout = logout;

// --- GESTIONE AUTH STATE ---
document.addEventListener('DOMContentLoaded', () => {
  const loginContainer = document.getElementById('login-container');
  const vault = document.getElementById('vault');

  if (!loginContainer || !vault) {
    console.warn('auth.js: elementi #login-container o #vault non trovati nel DOM.');
    return;
  }

  auth.onAuthStateChanged(user => {
    if (user) {
      loginContainer.style.display = 'none';
      vault.style.display = 'block';

      if (typeof loadPasswords === 'function') {
        try {
          loadPasswords();
        } catch (err) {
          console.error('Errore in loadPasswords():', err);
        }
      }
    } else {
      loginContainer.style.display = 'block';
      vault.style.display = 'none';
    }
  });
});
