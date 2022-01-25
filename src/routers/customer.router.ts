import express from 'express';
import CustomerController from '../controllers/customer.controller';

const router = express.Router();

router.post('/customer/create/', CustomerController.Create);
router.get('/customer/getall/', CustomerController.Getall);
router.get('/customer/get/:id', CustomerController.Get);

router.get('/customer/find/:phone', CustomerController.Find);
router.get('/customer/remove/:id', CustomerController.Remove);
router.post('/customer/update/:id', CustomerController.Update);

export default router;