import UserModel from '../models/Users.js';
import RoleModel from '../models/Role.js';

import jwt from 'jsonwebtoken';
import config from '../config.js'

export async function SignIn(req,res){
    let {name,password} =req.body;

    var User = await UserModel.findOne({name});
    if (!User){
        return res.json({status:404})
    }
    var PasswordVerify = await User.DesifrarContraseña(password);

    if(!PasswordVerify){
        return res.json({status:404})
    }

    var token =jwt.sign({id:User._id},config.SecretToken,{expiresIn:60 * 60 * 2 })
    res.cookie('x-access-token',token);
    res.set('x-access-token',token).json({token});
}
export async function Register(req,res){
    let {name,password,role} =req.body;

    var User = await UserModel.findOne({name});
    if (User){
        return res.json({status:404})
    }

    var User = new UserModel({name,password});
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
    res.json({token});

}
