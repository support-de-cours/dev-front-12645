// Import des librairies
require('dotenv').config();
const mongoose = require('mongoose');

// console.log( process.env.MONGO_URI );


// Definion de la connexion
const connect = async () => {
    try {
        await mongoose.connect( process.env.MONGO_URI, {});
        console.log("MongoDB connecté...");
    } catch(error) {
        console.error("Erreur de connexion MongoDB Atlas:", error);
        process.exit(1);
    }
}


// Execution ou Export de la connexion

// Connexion immediate
// connect();

// Export de la connexion
module.exports = {
    connect
};