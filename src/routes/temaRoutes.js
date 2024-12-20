import { Router } from 'express';
import temaController from '../controllers/temaController.js';

const router = new Router();

router.get('/tema', temaController.index);
router.get('/tema/:id', temaController.checkIfExists);
router.delete('/tema/:id', temaController.delete);
router.get('/tema/:tema/subtemas', temaController.getSubtemasByTema);

export default router;