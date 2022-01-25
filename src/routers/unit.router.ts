import express from 'express';
import UnitController from '../controllers/unit.controller';

const router = express.Router();

router.post('/unit/create/', UnitController.Create);
router.get('/unit/getall/', UnitController.Getall);

router.get('/unit/remove/:id', UnitController.Remove);
router.post('/unit/update/:id', UnitController.Update);

export default router;