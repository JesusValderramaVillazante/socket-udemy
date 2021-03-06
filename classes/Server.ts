import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from "../socket/socket";

//exportar paquete por defecto
export default class Server {
    private static _intance: Server;
    public app: express.Application;
    public port: number;
    public io: socketIO.Server; 
    private httpServer: http.Server;

    private constructor() {
        this.port = SERVER_PORT;
        this.app = express();
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.escucharSocket();
    };

    // Patron singleton
    public static get instance() {
        return this._intance || (this._intance = new this());
    }

    public escucharSocket() {
        this.io.on("connection", cliente => {
            socket.mensaje(cliente, this.io);
            socket.desconectar(cliente);
        })
    }

    public start(callback: Function) {
        this.httpServer.listen(this.port, callback());
    }
}