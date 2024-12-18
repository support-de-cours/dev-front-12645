// Import des librairies
const { check } = require('express-validator');


// Exports des contraintes
exports.create = [
    // Validation du champs Title
    check('title').not().isEmpty().withMessage('Title is required'),

    // Validation de la description
    // - 

    // Validation du Price
    check('price')
        .not().isEmpty().withMessage('Price is required')
        .isFloat({ max: 100 }).withMessage('Price must be less than or equal to 100')

];