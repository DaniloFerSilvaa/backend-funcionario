import { Router } from "express";
import * as ApiController from '../controllers/apiController';
import * as UserController from '../controllers/AuthController';

const router = Router();

router.get('/', ( req, res ) => {
    res.json({home: true})
})

//Rotas
router.get('/ping', ApiController.ping);
//router.get('/create', ApiController.create);

//Rotas de login e cadastro.
router.post('/singin', UserController.singin);
router.post('/singup', UserController.singup);

router.get('/funcionarios', ApiController.funcionarios);
router.put('/funcionario/:id', ApiController.editFuncionario);


export default router;