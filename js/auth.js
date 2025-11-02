// Authentication (no email verification)

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

auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('vault').style.display = 'block';
    loadPasswords();
  } else {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('vault').style.display = 'none';
  }
  function logout() {
  return auth.signOut();
}

// make available globally
window.logout = logout;
});

