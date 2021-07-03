import React from 'react';
export function SessionTrue(token,info){

    return (
        <div className='col s12 m8 offset-m2 '>
            <h3>{info}</h3>
            <strong>Este es tu token</strong>
            <p style={{width:'80%',overflowX:'scroll'}}>{token}</p>
        </div>
    )

}


