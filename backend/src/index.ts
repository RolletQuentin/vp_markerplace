import { config } from '~/config'

const http = require('http');
const app = require('./app');

// Fonction permettant le renvoie d'un port valide, qu'il soit fourni sous la forme d'un numéro ou d'une chaine
const normalizePort = (val: any) => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

// Pour set le port
const port = normalizePort(process.env.PORT || config.API_PORT.toString());
app.set('port', process.env.PORT || config.API_PORT);

// Fonction recherchant les différentes erreurs et les gère de manière appropriée. Elle est ensuite enregistée dans le serveur
const errorHandler = (error: any) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCESS':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

// Création du serveur
const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

// Pour écouter le port
server.listen(port);