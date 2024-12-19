// 1. Import de librairies
// --
const { validationResult } = require('express-validator');
const Book = require('./../Model/BookModel');


// 2. Definition des controllers
// --

// Index (Liste des livres)
exports.index = async (request, response) => {

    response.render('pages/book/index', {
        books: await Book.find()
    });

}

// Create (créer un livre)
exports.create = async (request, response) => {

    // Recupération des données du formulaire
    // Les données ont la valeur "undefined" si le controller est executé avec la methode GET
    const {
        title,
        description,
        price
    } = request.body;

    let book;

    // Recupération du resultat du controle du formulaire (BookValidation)
    const errors = validationResult(request);
    
    // Procédure d'enregistrement de la données SI :
    //  -> La methode de requet est POST
    //  -> ET que
    //  -> la liste des "errors" est vide
    if (request.method === 'POST' && errors.isEmpty())
    {
        // Création de l'objet "Book" basé sur le model BookModel
        // puis hydratation (ajoute des données)
        book = new Book({ 
            title, 
            description, 
            price 
        });

        // Enregistrement de "book" en BDD
        // "save()" vient de l'ORM Mongoose
        await book.save();

        // Redirige l'utilisateur vers la page du livre 
        return response.redirect(`/book/${book._id}`);
    }    
    
    response.render('pages/book/create', {
        errors: errors.array(),
        title: title,
        description: description,
        price: price,
    });
}

// Read (Lire les details d'un livre)
exports.read = async (request, response) => {
    
    const { id } = request.params; 
    const book = await Book.findById(id);

    if (!book) {
        return response.status(404).render('pages/error/not-found', {
            errors: [{ msg: "Book not found." }],
        });
    }

    response.render('pages/book/read', {
        book: book
    });

}

// Update (Modifier les données d'un livre)
exports.update = async (request, response) => {
    response.render('pages/book/update');
}

// Delete (Supprimer un livre)
exports.delete = async (request, response) => {
    response.render('pages/book/delete');
}