import { Router } from 'express';
import CreateNewProduct from '../endpoints/CreateNewProduct';
import GetProductbyName from '../endpoints/GetProductByName';
import GetProducts from '../endpoints/GetProduct';
import EditProduct from '../endpoints/EditProduct';
import DeleteProduct from '../endpoints/DeleteProduct';

export const router = Router();

router.post('/create-product', CreateNewProduct);
router.get('/product/:name', GetProductbyName);
router.get('/product', GetProducts);
router.put('/product-put/:id', EditProduct)
router.delete('/delete/:id', DeleteProduct)