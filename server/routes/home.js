//Importando router
import { Router } from 'express';
//Importando al controlador Home
import homeControllers from '@server/controllers/homeControllers';

//Creando instancia de un router
const router = new Router();

//Petición GET que se haga a la ruta raíz
router.get('/', homeControllers.index);

//GET '/hola'
router.get('/hola', homeControllers.hola);

//Exportando el router que maneja las subrutas para el controlador home Conectando a router padre
export default router;
