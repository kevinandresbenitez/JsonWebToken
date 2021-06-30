import ProductModel from '../models/Products.js';

export async function GetProduct(req,res){
    var Product = await ProductModel.find({});
    res.status(200).json(Product);
}
export async function CreateProduct(req,res){
    let data_form= req.body ;

    var Product =await  new ProductModel(data_form);
    await Product.save()

    res.status(202).json({status:'Product Created'});
}
export async function GetProductById(req,res){
    var Product =  await ProductModel.findById(req.params.id);
    res.status(200).json(Product);
}
export async function DeleteProductById(req,res){
    var Product = await ProductModel.findOneAndDelete(req.params.id)
    res.status(204).json({status:'Product Deleted'});
}

export async function UpdateProductById(req,res){
    var Product = await ProductModel.findOneAndUpdate(req.params.id,req.body)
    res.status(200).json({status:'Product Update'});
}