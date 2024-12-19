const net = require('net');

module.exports = () => {

    // Création de l'instance d'un serveur
    const server = net.createServer();

    // Démarrage du serveur, sur le port 0
    server.listen(0);

    // Récupération du port choisi par "net"
    const port = server.address().port;

    // Fermeture du serveur pour libérer le port
    server.close();

    // Retourne le port
    return port;
}