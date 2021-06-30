import express from 'express';
var Router =express.Router();

import {DeleteProductById,GetProduct,GetProductById,UpdateProductById,CreateProduct} from '../controllers/Products.controller.js';
import {VerifyToken,VerifyInfoToken}  from '../middlewares/Auht_verify.js';


Router.get('/',VerifyToken, GetProduct);
Router.post('/',VerifyToken,CreateProduct);
Router.get('/:id',VerifyToken,GetProductById);
Router.put('/:id',VerifyToken,UpdateProductById);
Router.delete('/:id',VerifyToken,DeleteProductById);

export default Router;