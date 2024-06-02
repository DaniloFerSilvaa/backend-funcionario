import { Router } from "express";
import * as ApiController from '../controllers/apiController'
const router = Router();

router.get('/', ( req, res ) => {
    res.json({home: true})
})

//Rotas
router.get('/ping', ApiController.ping);
//router.get('/create', ApiController.create);

router.get('/funcionarios', ApiController.funcionarios);
router.post('/funcionario', ApiController.funcionario);

export default router;