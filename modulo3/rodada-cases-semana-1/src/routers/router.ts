import { Router } from 'express';
import CreateNewProduct from '../endpoints/NewProducts';
import GetProductbyName from '../endpoints/GetProductByName';
import GetProducts from '../endpoints/GetProducts';

export const router = Router();

router.post('/create-product', CreateNewProduct);
router.get('/product/:name', GetProductbyName);
router.get('/product', GetProducts);