// encryption.js

// Genera una chiave stabile e forte per l'utente
function generateStrongKey(uid) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const symbols = '!@#$%^&*()-_=+[]{}|;:,.<>?/`~';
  const numbers = '0123456789';

  // Per renderla coerente tra sessioni, usiamo SHA256 su uid per seed
  const seed = CryptoJS.SHA256(uid).toString();

  // Funzione pseudo-random deterministica da seed
  function seededRandom(seed, chars, length) {
    let result = '';
    let indexSeed = 0;

    for (let i = 0; i < length; i++) {
      // usa byte del seed per generare posizione
      const code = seed.charCodeAt(indexSeed % seed.length);
      indexSeed++;
      result += chars[code % chars.length];
    }

    return result;
  }

  const partLetters = seededRandom(seed, letters, 25);
  const partSymbols = seededRandom(seed.split('').reverse().join(''), symbols, 15);
  const partNumbers = seededRandom(seed.toUpperCase(), numbers, 10);

  const fullKey = uid + partLetters + partSymbols + partNumbers;
  return CryptoJS.SHA512(fullKey).toString(); // hash finale = chiave AES solida
}

// Cifratura AES
function encryptData(data, uid) {
  if (!uid) throw new Error('UID mancante per cifratura');
  const key = generateStrongKey(uid);
  const encrypted = CryptoJS.AES.encrypt(data, key).toString();
  return encrypted;
}

// Decifratura AES
function decryptData(encryptedData, uid) {
  if (!uid) throw new Error('UID mancante per decifratura');
  const key = generateStrongKey(uid);
  const bytes = CryptoJS.AES.decrypt(encryptedData, key);
  const decrypted = bytes.toString(CryptoJS.enc.Utf8);

  if (!decrypted) throw new Error('Errore di decifratura: chiave o dati non validi');
  return decrypted;
}

// Esporta in globale
window.generateStrongKey = generateStrongKey;
window.encryptData = encryptData;
window.decryptData = decryptData;
