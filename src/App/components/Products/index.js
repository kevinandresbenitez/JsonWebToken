import React,{useEffect,useState} from 'react';

export default function Products(){

    var [session,setSession] = useState(null);
    var [sessionFail,setSessionFail] = useState(null);


    useEffect(()=>{
    
        fetch('http://localhost:8080/Api/products')
        .then(server =>server.json()).then((response)=>{
            if(response.status === 200){
                M.toast({html:'Welcome'});
                setSession(response.data)
            }else{
                setSessionFail(response.error)
                M.toast({html:response.error});
            }
        })
        .catch((e)=>{console.log(e)})


    },[])


    return(
        <div className='container'>
            <div className='col s12 m8 offset-m2 '>

            <h1>Products</h1>
            {session && session.length > 0 ? session.map((obj,key)=>{
                return (
                    <div> 
                        <div className="divider"></div>
                            <div className="section">
                            <h5>{obj.name}</h5>
                            <p>{obj.category}</p>
                            <p>{obj.price}</p>
                            <p>{obj._id}</p>
                        </div>
                    </div>
            )            
            }):null}


            {sessionFail || null}


            </div>
        </div>
    )
}