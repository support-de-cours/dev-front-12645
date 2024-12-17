// Creation du serveur
// --

// Import des librairies
const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();
const port = 3000;


// Configration de l'application 
// -> Accès public
// -> Gestion des template
// -> Connexion BDD
// -> Serve

// Definis l'acces au repetoire "template"
app.set('views', path.join(__dirname, "templates"));

// Definition du type de fichiers de vues
// -> par defaut les vues sont en ".ejs"
// -> on impose les vues en ".html"
app.set('view engine', "html");
app.engine('html', ejs.__express);

// Definition de l'acces au repertoire "public"
// L'acces au contenu du répertoire "public" se fait via l'url "http://site.com/"
// -> si le css est dans "/public/styles/main.css"
// -> l'acces sera "http://site.com/styles/main.css"
app.use( express.static( path.join(__dirname, 'public') ) );

// Acces à bootstrap
app.use("/css", express.static( path.join( __dirname, "/node_modules/bootstrap/dist/css" )) );
app.use("/js", express.static( path.join( __dirname, "/node_modules/bootstrap/dist/js" )) );


// Definition du routage
app.use( require(path.join(__dirname, './config/router')) );

// Démarrage du serveur
app.listen(port, () => console.log(`Server is listening on http://localhost:${port}`) );