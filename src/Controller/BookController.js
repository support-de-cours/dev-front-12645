// Index (Liste des livres)
exports.index = (request, response) => {
    response.render('pages/book/index');
}

// Create (créer un livre)
exports.create = (request, response) => {

    const {
        title,
        description,
        price
    } = request.body;

    
    if (request.method === 'POST')
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