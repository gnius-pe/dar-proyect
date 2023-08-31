const { Int32 } = require('mongodb');
const mongoose = require('mongoose');

const personaSchema = new mongoose.Shema({
    nombre: String,
    age : Int32
})

const Persona = mongoose.model('persona',personaSchema);

module.exports = Persona;