import config from '../config.js';
import jwt from 'jsonwebtoken';

export function VerifyToken (req,res,next){    
    var token =req.headers['x-access-token'] || req.cookies['x-access-token'] || null;

    if(token){
        try{
            jwt.verify(token ,config.SecretToken)
            return next()
        }catch(e){
            console.log(e)
            res.status(409).json({error:'Token invalid'})
        }
    }else{
        return res.status(409).json({error:'Token not provide'});
    }
}
export function VerifyInfoToken(req,res){
    var token =req.headers['x-access-token'] || req.cookies['x-access-token'] || null;
    return jwt.verify(token,config.SecretToken);
}


