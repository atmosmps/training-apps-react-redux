const mongoose = require('mongoose')

// A API de prmisse do Mongoose vai usar a API de Promisses global do Node
mongoose.Promisse = global.Promisse
module.exports = mongoose.connect('mongodb://localhost/todoapp')

/**
 * MongoDB NoSQL
 * Orientado a Documentos(Json é o formato deste documento, formato principal)
 * 
 * Escalonamento Horizontal mais facilitado
 */
