import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import ProductController from './controllers/ProductController';

const routes = express.Router();
const upload = multer(multerConfig);

const productController = new ProductController();

routes.post(
  '/create-product',
  upload.single('image'),
  productController.create
);

routes.get('/products', productController.index);

export default routes;
