const cryptoJS = require ("crypto-js")

const mensaje = "LO DESCRUBISTE : Este es el mensaje secreto"
const clave = "mondongo"

// cifrado
const mensajeEncriptado = cryptoJS.AES.encrypt(mensaje,clave).toString()
console.log(mensajeEncriptado);

//desencryptado
const mensajeDesencriptado = cryptoJS.AES.decrypt(mensajeEncriptado,clave).toString(cryptoJS.enc.Utf8)

console.log(mensajeDesencriptado);