import express from 'express';
import SuplierController from '../controllers/dealership.controller';

const router = express.Router();

router.post('/suplier/create/', SuplierController.Create);
router.get('/suplier/getall/', SuplierController.Getall);

router.get('/suplier/get/:id', SuplierController.Get);
router.get('/suplier/find/:phone', SuplierController.Find);

router.get('/suplier/remove/:id', SuplierController.Remove);
router.post('/suplier/update/:id', SuplierController.Update);

export default router;