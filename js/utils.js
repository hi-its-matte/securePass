// utils.js
export function showMessage(message, type = 'info', container = document.getElementById('message-container')) {
  if (container) {
    container.innerHTML = `<div class="status-message ${type}">${message}</div>`;
    setTimeout(() => container.innerHTML = '', 5000);
  } else {
    alert(message);
  }
}

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePassword(password) {
  return password.length >= 6;
}

export function clearForm(...inputs) {
  inputs.forEach(i => i.value = '');
}

export function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
