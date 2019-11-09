import Server from "./classes/Server";
import router from "./routes/router";

let server = new Server();
server.app.use('/', router);

server.start(() => {
    console.log("escuchando");
});
