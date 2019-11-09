import {Router, Request, Response} from 'express';
const router: Router = Router();

router.get('/mensajes', function(req: Request, res: Response){
    console.log("mensaje");
    res.json(true);
});

export default router;