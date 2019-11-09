"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/mensajes', function (req, res) {
    res.json({
        ok: true,
        mensaje: 'GET - listo'
    });
});
router.post('/mensajes', function (req, res) {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    res.json({
        ok: true,
        mensaje: 'POST - listo'
    });
});
router.post('/mensajes/:id', function (req, res) {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    res.json({
        ok: true,
        mensaje: id
    });
});
exports.default = router;
