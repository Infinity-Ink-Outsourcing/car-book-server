import express from 'express';
import CategoryController from '../controllers/make.controller';

const router = express.Router();

router.post('/category/create/', CategoryController.Create);
router.get('/category/getall/', CategoryController.Getall);
router.get('/category/remove/:id', CategoryController.Remove);
router.get('/category/update/:id', CategoryController.Update);

export default router;