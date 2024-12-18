// Import des librairies
const mongoose = require('mongoose');


// Creation du schema de données
// Definition de la structure de donnée et des contraintes des structure de base de données
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: { // 2024-12-18T12:34:56.789Z
        type: Date, 
        default: Date.now
    }
});


// Creation du model de données 
// Model = Schema + Logique de la données
const Book = mongoose.model('Book', BookSchema);


// Export du model de données
module.exports = Book;