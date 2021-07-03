import React,{useState} from 'react';
import {SessionTrue} from '../SesionTrue/index.js';

export default function SingnUp(){

        
    let [token,setToken] = useState(null);

    const sendForm =(e,form)=>{
        e.preventDefault();
        let {name,email,password} =form;
        var NewUser={name:name.value,email:email.value,password:password.value};

        fetch('/Registrar',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(NewUser)
        })
        .then(server =>server.json()).then((response)=>{

            if(response.status === 200){
                M.toast({html:'Usted se ha registrado correctamente'});
                document.cookie = `x-access-token = ${response.token}` ;
                setToken(response.token); 
            }else{
                M.toast({html:response.error})
            }

        })
        .catch((e)=>{
            console.log(e);
        });


        name.value = '';
        email.value ='';
        password.value='';
    }
        
 


    return(
        <div className="container-fluid">
            <div className="row">
                {token ?  SessionTrue(token,'Registrado correctamente'):null}
                <div className="col s12 m6 l4 offset-m3 offset-l4 ">
                    <div className="card hoverable" style={{margin:'20%',padding:'15px 5px'}}>
                        <div className="card-content">
                        <form action="" id='form'>
                                <span className="card-title">Registrarse</span>

                                <div className="input-field">
                                    <label for="Nombre">Nombre</label>
                                    <input type="text" name="name" id="Nombre"required/>
                                </div>

                                <div className="input-field">
                                    <label for="Email">Email</label>
                                    <input type="text" name="email" id="Email" required />
                                </div>

                                <div className="input-field">
                                    <label for="contrasena">Contraseña</label>
                                    <input type="text" name="password" id="contrasena" required />
                                </div>

                                <button type="submit" onClick={(e)=>{sendForm(e,document.getElementById('form'))}} className="btn purple lighten-3 waves-effect waves-light">Registrarse</button>

                        </form>        
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
        
        
        
        
        
    
}