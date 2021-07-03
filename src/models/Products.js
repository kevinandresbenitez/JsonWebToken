import mongoose from 'mongoose';

var Product = new mongoose.Schema({
    name:String,
    category:String,
    price:Number,
    imgURL:String
},{
    timestamp:true
})


export default mongoose.model('Products',Product);