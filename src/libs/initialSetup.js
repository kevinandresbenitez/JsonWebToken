import Role from '../models/Role.js';


export default async function CreateRoles(){
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