import express from 'express';
import ProductController from '../controllers/vehicle.controller';

const router = express.Router();

router.post('/product/create/', ProductController.Create);
router.get('/product/getall/', ProductController.Getall);
router.get('/product/get/:id', ProductController.Get);
router.get('/product/find/:barcode', ProductController.Find);
router.get('/product/remove/:id', ProductController.Remove);
router.get('/product/update/:id', ProductController.Update);

export default router;