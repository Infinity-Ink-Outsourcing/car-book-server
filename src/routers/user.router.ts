import express from 'express';
import UserController from '../controllers/user.controller';


const router = express.Router();

router.post('/user/create/', UserController.Create);
router.get('/user/getall/', UserController.Getall);
router.get('/user/get/:id', UserController.Get);
router.get('/user/remove/:id', UserController.Remove);
router.get('/user/update/:id', UserController.Update);
router.get('/user/active/:id', UserController.Activation);

export default router;