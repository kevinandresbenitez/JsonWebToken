import express from 'express';
import './db_config.js';
import {CreateProducts,CreateRoles} from './libs/initialSetup.js';
import morgan from 'morgan';
import cors from 'cors';
import CookieParser from 'cookie-parser';
import path from 'path';

var app =express();


/* Initial stup and Midlewares*/
CreateProducts();
CreateRoles();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(CookieParser());
app.use(express.static(path.resolve( path.dirname('root') ,'src', 'static'))) 


/* Routes */
import AuhtRoutes from './routes/Auht.routes.js';
import ProductsRoutes from './routes/Products.routes.js';
import UserRoutes from './routes/User.routes.js';

app.use('/',AuhtRoutes); 
app.use('/Api/Products',ProductsRoutes);
app.use('/Api/Users',UserRoutes);


/*Enable React-router with static files renders */
app.get('*', (req,res) =>{
    res.sendFile(path.resolve(path.dirname('root') , 'src','static','index.html'));
});


/* Server listen */
var PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log('Servidor iniciado en puerto '+ PORT);
})