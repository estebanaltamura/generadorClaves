const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// Generar una clave simétrica de 256 bits (32 bytes)
const symmetricKey = crypto.randomBytes(32).toString('hex');

// Ruta donde se guardará la clave
const filePath = '/home/ssm-user/projects/login-server/privateKey.txt';

// Crear directorios si no existen
const dirPath = path.dirname(filePath);
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

// Guardar la clave en un archivo
fs.writeFile(filePath, symmetricKey, (err) => {
  if (err) {
    console.error('Error al guardar la clave:', err);
  } else {
    console.log('Clave simétrica guardada en', filePath);
  }
});
