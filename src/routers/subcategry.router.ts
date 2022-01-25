import express from 'express';
import SubcategoryController from '../controllers/manaufacture.controller';

const router = express.Router();

router.post('/subcategory/create/', SubcategoryController.Create);
router.get('/subcategory/getall/', SubcategoryController.Getall);
router.get('/subcategory/remove/:id', SubcategoryController.Remove);
router.get('/subcategory/update/:id', SubcategoryController.Update);

export default router;