// Vault (UI & Table Logic)

function displayPasswords(passwords) {
  const list = document.getElementById('passwordList');
  list.innerHTML = '';

  if (!passwords || Object.keys(passwords).length === 0) {
    list.innerHTML = '<tr><td colspan="4" style="text-align:center;color:#666;">Nessuna password salvata</td></tr>';
    return;
  }

  Object.keys(passwords).forEach(id => {
    const p = passwords[id];
    const decryptedSite = decryptData(p.site, auth.currentUser.uid);
    const decryptedUsername = decryptData(p.username, auth.currentUser.uid);
    const decryptedPassword = decryptData(p.password, auth.currentUser.uid);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${escapeHtml(decryptedSite)}</strong></td>
      <td>${escapeHtml(decryptedUsername)}</td>
      <td class="password-cell">
        <span class="password-hidden" data-password="${escapeHtml(decryptedPassword)}" onclick="togglePassword(this)">••••••••</span>
        <button onclick="copyPassword('${escapeHtml(decryptedPassword)}')">📋</button>
      </td>
      <td><button onclick="deletePassword('${id}')">Elimina</button></td>
    `;
    list.appendChild(tr);
  });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function togglePassword(el) {
  const pwd = el.dataset.password;
  el.textContent = el.textContent === '••••••••' ? pwd : '••••••••';
}

function copyPassword(pwd) {
  navigator.clipboard.writeText(pwd).then(() => {
    showMessage('Password copiata!', 'success');
  });
}
