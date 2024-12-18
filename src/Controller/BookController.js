// 1. Import de librairies
// --
const { validationResult } = require('express-validator');



// 2. Definition des controllers
// --

// Index (Liste des livres)
exports.index = (request, response) => {
    response.render('pages/book/index');
}

// Create (créer un livre)
exports.create = (request, response) => {

    // Recupération des données du formulaire
    // Les données ont la valeur "undefined" si le controller est executé avec la methode GET
    const {
        title,
        description,
        price
    } = request.body;

    // Recupération du resultat du controle du formulaire (BookValidation)
    const errors = validationResult(request);
    
    // Procédure d'enregistrement de la données SI :
    //  -> La methode de requet est POST
    //  -> ET que
    //  -> la liste des "errors" est vide
    if (request.method === 'POST' && errors.isEmpty())
    {
        console.log( title );
    }
    
    
    response.render('pages/book/create');

}

// Read (Lire les details d'un livre)
exports.read = (request, response) => {
    response.render('pages/book/read');
}

// Update (Modifier les données d'un livre)
exports.update = (request, response) => {
    response.render('pages/book/update');
}

// Delete (Supprimer un livre)
exports.delete = (request, response) => {
    response.render('pages/book/delete');
}