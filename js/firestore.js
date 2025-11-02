// Firestore CRUD

function savePassword(site, username, password) {
  const user = auth.currentUser;
  if (!user) return Promise.reject('Devi essere loggato');

  const encryptedData = {
    site: encryptData(site, user.uid),
    username: encryptData(username, user.uid),
    password: encryptData(password, user.uid),
    created: firebase.firestore.FieldValue.serverTimestamp()
  };

  return db.collection('users')
    .doc(user.uid)
    .collection('passwords')
    .add(encryptedData);
}

function loadPasswords() {
  const user = auth.currentUser;
  if (!user) return;

  db.collection('users')
    .doc(user.uid)
    .collection('passwords')
    .orderBy('created', 'desc')
    .onSnapshot(snapshot => {
      const passwords = {};
      snapshot.forEach(doc => passwords[doc.id] = doc.data());
      displayPasswords(passwords);
    }, err => {
      console.error('Error loading passwords:', err);
    });
}

function deletePassword(id) {
  const user = auth.currentUser;
  if (!user) return;

  return db.collection('users')
    .doc(user.uid)
    .collection('passwords')
    .doc(id)
    .delete();
}
