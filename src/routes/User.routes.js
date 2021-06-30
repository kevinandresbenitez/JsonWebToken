import express from 'express';
var Router =express.Router();

import {CreateUser,DeleteUserByid,GetUser,UpdateUserById,GetUserById}  from '../controllers/Users.controller.js'
import {VerifyToken,VerifyInfoToken}  from '../middlewares/Auht_verify.js';

Router.get('/',VerifyToken,GetUser);
Router.post('/',VerifyToken,CreateUser);
Router.get('/:id',VerifyToken,GetUserById);
Router.put('/:id',VerifyToken,UpdateUserById);
Router.delete('/:id',VerifyToken,DeleteUserByid);




export default Router;