import Role from '../models/Role.js';
import Products from '../models/Products.js';

export  async function CreateRoles(){
    try{
        var RolesCount = await Role.countDocuments();
        if (RolesCount > 0 )return;
        await Promise.all([
            new Role({name:'admin'}).save(),
            new Role({name:'moderator'}).save(),
            new Role({name:'user'}).save()
        ])

    }catch(e){
        console.log(e)
    }

}

export  async function CreateProducts(){
    try{
        var ProductsCount = await Products.countDocuments();
        if (ProductsCount > 0 )return;
        await Promise.all([
            new Products({name : "Product 1", category : "Org-1", price: 120}).save(),
            new Products({name : "Product 2", category : "Org-2", price: 130}).save(),
            new Products({name : "Product 3", category : "Org-3", price: 140}).save(),
            new Products({name : "Product 4", category : "Org-4", price: 150}).save(),
            new Products({name : "Product 5", category : "Org-5", price: 160}).save(),
            new Products({name : "Product 6", category : "Org-6", price: 170}).save(),
        ])

    }catch(e){
        console.log(e)
    }



}