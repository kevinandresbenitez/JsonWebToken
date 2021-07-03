import UserModel from '../models/Users.js';
import RoleModel from '../models/Role.js';

import jwt from 'jsonwebtoken';
import config from '../config.js'

export async function SignIn(req,res){
    let {password,email} =req.body;

    var User = await UserModel.findOne({email});
    if (!User){
        return res.status(404).json({status:404,error:'Invalid password or email'})
    }
    var PasswordVerify = await User.DesifrarContraseña(password);
    if(!PasswordVerify){
        return res.status(404).json({status:404,error:'Invalid password or email'})
    }

    var token =jwt.sign({id:User._id},config.SecretToken,{expiresIn:60 * 60 * 2 })
    res.cookie('x-access-token',token);
    res.set('x-access-token',token);
    res.status(200).json({status:200,token});
}

export async function Register(req,res){
    let {name,email,password,role} =req.body;

    var User = await UserModel.findOne({name});
    if (User){
        return res.status(400).json({error:'Error this user exists',status:400})
    }

    var User = new UserModel({name,email,password});
    User.password = await User.CifrarContraseña(User.password)

    if(role){
        var roleVerify =await RoleModel.find({name:{$in:role}})
        User.role = roleVerify.map(obj => obj._id);
    }else{
        var defaultRole = await RoleModel.findOne({name:'user'});
        User.role = [defaultRole._id];
    }

    await User.save()

    var token =jwt.sign({id:User._id},config.SecretToken,{expiresIn:60 * 60 * 2 })
    res.cookie('x-access-token',token);
    res.set('x-access-token',token);
    res.status(200).json({token,status:200});

}
