"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', function (req, res) {
    console.log("mensaje");
    res.json(true);
});
exports.default = router;
