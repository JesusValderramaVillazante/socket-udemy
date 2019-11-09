"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./classes/Server"));
const router_1 = __importDefault(require("./routes/router"));
let server = new Server_1.default();
server.app.use('/', router_1.default);
server.start(() => {
    console.log("escuchando");
});
