// Definition des routes de l'application.
// Les routes déclenchent une fonction (un controlleur) depuis l'adresse dansd le navigateur (le path)

// 1. Import de Express et du module Router
const express = require('express');
const router = express.Router();
const path = require('path');

const homepageController = require(path.join(__dirname, '../src/Controller/HomepageController'));
const aboutController = require(path.join(__dirname, '../src/Controller/AboutController'));
const bookController = require(path.join(__dirname, '../src/Controller/BookController'));
const bookValidator = require(path.join( __dirname, '../src/Validator/BookValidator'));

// 2. Definition des routes (path + method HTTP + controller)
//  Syntaxe: router.<method>(path, [middleware, ] controller)


// Homepage
// http://site.com/
router.get('/', homepageController.index);

// About
// http://site.com/about
router.get('/about', aboutController.index);

// Book

// Syntaxes possible
// --
//  URL pour API
//      http://site.com/books            -> Index
//      http://site.com/books/create     -> Create
//      http://site.com/books/42         -> Read
//      http://site.com/books/42/edit    -> Update
//      http://site.com/books/42/delete  -> Delete
//   
//  URL orientée UX
//      http://site.com/books            -> Index
//      http://site.com/book             -> Create
//      http://site.com/book/42          -> Read
//      http://site.com/book/42/edit     -> Update
//      http://site.com/book/42/delete   -> Delete

// http://site.com/books
router.get('/books', bookController.index); // Affiche les livres

// GET  http://site.com/book  - Afiiche le formulaire
// POST http://site.com/book  - Traitement du formulaire
router.get('/book', bookController.create); // Affiche le formulaire (pas d'enregistrement du livre)
router.post('/book', bookValidator.create, bookController.create); // Enregistre les données du formulaire

// http://site.com/book/42
router.get('/book/:id', bookController.read);

// GET  http://site.com/book/42/edit    - Afiiche le formulaire
// POST http://site.com/book/42/edit    - Traitement du formulaire
router.get('/book/:id/edit', bookController.update);    // Affiche le formulaire + les données du livre (pas d'enregistrement du livre)
router.post('/book/:id/edit', bookController.update);   // Enregistre les données du formulaire

// GET  http://site.com/book/42/delete  - Affiche un message de confirmation de suppression
// POST  http://site.com/book/42/delete  - Execute la suppression
router.get('/book/:id/delete', bookController.delete);
router.post('/book/:id/delete', bookController.delete);



// 3. Export du router
module.exports = router;