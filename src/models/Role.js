import mongoose from 'mongoose';

var Role = new mongoose.Schema({
    name:String
})




export default mongoose.model('Role',Role);