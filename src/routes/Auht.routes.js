import express from 'express';
var Router =express.Router();

import {SignIn,Register} from '../controllers/Auth.controller.js';


Router.post('/Iniciar' ,SignIn )
Router.post('/Registrar',Register);




export default Router;