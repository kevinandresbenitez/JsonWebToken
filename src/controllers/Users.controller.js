import User from '../models/Users.js';

export async function GetUser(req,res){
    var Users = await User.find({});
    res.json(Users);
}
export async function CreateUser(req,res){
    let data_form= req.body ;

    var Users = new User(data_form);
    Users.save()

    res.json(Users);
}
export async function GetUserById(req,res){
    var Users =  await User.findById(req.params.id);
    res.json(Users);
}
export async function DeleteUserByid(req,res){
    var Users = await User.findOneAndDelete(req.params.id)
    res.json(Users);
}
export async function UpdateUserById(req,res){
    var Users = await User.findOneAndUpdate(req.params.id,req.body)
    res.send(Users);
}


