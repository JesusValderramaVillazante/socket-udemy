"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
//exportar paquete por defecto
class Server {
    constructor() {
        this.port = environment_1.SERVER_PORT;
        this.app = express_1.default();
    }
    ;
    start(callback) {
        this.app.listen(callback);
    }
}
exports.default = Server;
