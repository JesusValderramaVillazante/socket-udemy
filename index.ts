import Server from "./classes/Server";
import bodyParser from 'body-parser';
import router from "./routes/router";
import cors from 'cors';

let server = Server.instance;

server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
server.app.use( cors({ origin: true, credentials: true }));
server.app.use('/', router);

server.start(() => {
    console.log(`escuchando en el puerto ${server.port}`);
});
