import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';


var User = new mongoose.Schema({
    name:String,
    password:String,
    email:String,
    role:{
        type:mongoose.SchemaTypes.ObjectId,
        rel:'Role'
    }
},{
    timestamp:true
})


User.methods.CifrarContraseña = async function (password){
    var salt = await bcrypt.genSalt(5);
    return bcrypt.hash(password,salt)
}

User.methods.DesifrarContraseña = async function (password){
    return bcrypt.compare(password,this.password)
}

export default mongoose.model('Users',User);