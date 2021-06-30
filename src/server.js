import express from 'express';
import morgan from 'morgan';
import './db_config.js';
import InitialSetup from './libs/initialSetup.js';
import cors from 'cors';
import CookieParser from 'cookie-parser';

var app =express();


/* Midlewares*/
import {VerifyToken,VerifyInfoToken}  from './middlewares/Auht_verify.js';
InitialSetup()
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(CookieParser());



/* Routes */
import AuhtRoutes from './routes/Auht.routes.js';
import ProductsRoutes from './routes/Products.routes.js';
import UserRoutes from './routes/User.routes.js';

app.use('/',AuhtRoutes);
app.use('/Products',ProductsRoutes);
app.use('/Users',UserRoutes);


app.get('/',VerifyToken,(req,res)=>{
    var token_info =VerifyInfoToken(req,res);
    res.json({status:200})
})


/* Server listen */
var PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log('Servidor iniciado en puerto '+ PORT);
})