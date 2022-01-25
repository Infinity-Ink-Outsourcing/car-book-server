import express from 'express';
import TransactionController from '../controllers/transaction.controller';

const router = express.Router();

router.post('/transaction/create/', TransactionController.Create);
router.get('/transaction/getall/', TransactionController.Getall);
router.get('/transaction/get/:id', TransactionController.Get);
router.get('/transaction/remove/:id', TransactionController.Remove);
router.get('/transaction/update/:id', TransactionController.Update);

export default router;