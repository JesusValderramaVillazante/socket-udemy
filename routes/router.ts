import { Router, Request, Response } from 'express';
const router: Router = Router();

router.get('/mensajes', function (req: Request, res: Response) {
    res.json({
        ok: true,
        mensaje: 'GET - listo'
    });
});

router.post('/mensajes', function (req: Request, res: Response) {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        mensaje: 'POST - listo'
    });
});

router.post('/mensajes/:id', function (req: Request, res: Response) {
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const id = req.params.id;
    
    res.json({
        ok: true,
        mensaje: id
    });
});

export default router;