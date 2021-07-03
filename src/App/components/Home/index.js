import React,{useState,useEffect} from 'react';
import {SessionTrue} from '../SesionTrue/index.js';




export default function Home(){

    let [token,setToken] = useState(null);

    useEffect(()=>{
        var token = document.cookie.split('=')[1]
        setToken(token);
    },[])


    return(
        <div className="container">
            <div className="col s12 m6 l4 offset-m3 offset-l4 ">
                <h2>Home</h2>

                <blockquote className='blockquote'>
                    Pequeño proyecto para validacion de usuarios con el uso de tokens
                </blockquote>
            </div>

            {token ?  SessionTrue(token,'Usted ya ha iniciado session'):null}


        </div>        
    )
}