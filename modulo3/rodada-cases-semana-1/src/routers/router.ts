import { Router } from 'express';
import CreateNewProduct from '../endpoints/NewProducts';

export const router = Router();

router.post('/create-product', CreateNewProduct);

