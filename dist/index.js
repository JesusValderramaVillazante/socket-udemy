"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Server_1 = __importDefault(require("./classes/Server"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./routes/router"));
const cors_1 = __importDefault(require("cors"));
let server = new Server_1.default();
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.app.use('/', router_1.default);
server.start(() => {
    console.log(`escuchando en el puerto ${server.port}`);
});
