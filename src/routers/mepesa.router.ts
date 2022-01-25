import express from 'express';
import MpesaController from '../controllers/mpesa.controller';
import MpesaMW from '../middlewares/mpesa.mw'


const router = express.Router();

router.get('/mpesa/push/',MpesaMW, MpesaController.StkPush);
router.get('/mpesa/b2c/',MpesaMW, MpesaController.B2C);
router.get('/mpesa/balance/',MpesaMW, MpesaController.Balance);
router.get('/mpesa/reversal/',MpesaMW, MpesaController.Reversal);

export default router;