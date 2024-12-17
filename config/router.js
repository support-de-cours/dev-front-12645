// Definition des routes de l'application.
// Les routes déclenchent une fonction (un controlleur) depuis l'adresse dansd le navigateur (le path)

// 1. Import de Express et du module Router
const express = require('express');
const router = express.Router();
const path = require('path');

const homepageController = require(path.join(__dirname, '../src/Controller/HomepageController'));
const aboutController = require(path.join(__dirname, '../src/Controller/AboutController'));

// 2. Definition des routes (path + method HTTP + controller)
//  Syntaxe: router.<method>(path, [middleware, ] controller)


// Homepage
router.get('/', homepageController.index);

// About
router.get('/about', aboutController.index);



// 3. Export du router
module.exports = router;