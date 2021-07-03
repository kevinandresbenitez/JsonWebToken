import ReactDOM from 'react-dom';
import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import Home from './components/Home/index.js';
import SignIn from './components/SignIn/index.js';
import SignUp from './components/SignUp/index.js';
import Products from './components/Products/index.js';

function App(){
    return(
        <Router>

            <nav className="nav-extended purple lighten-3 pink-text text-darken-4">
                <div className='nav-wrapper'>
                    <Link className='col s4 brand-logo m2 offset-s2 ' style={{margin:'auto 10px'}} to='/'>JWT</Link>
                </div>              

                <div className='nav-content '>
                    <ul className='tabs tabs-transparent'>
                    <li className='tab'><Link to='/'>Home</Link> </li>
                        <li className='tab'><Link to='/Iniciar'>Iniciar</Link> </li>
                        <li className='tab'><Link to='/Registrarse'>Registrar</Link> </li>
                        <li className='tab'><Link to='/Products'>Products</Link> </li>
                    </ul>
                </div>
            </nav>

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>

                <Route exact path='/Iniciar'>
                    <SignIn />
                </Route>

                <Route exact path='/Registrarse'>
                    <SignUp />
                </Route>

                <Route exact path='/Products'>
                    <Products />
                </Route>
            </Switch>

        </Router>
    )
}

ReactDOM.render(<App />,document.getElementById('root'));


