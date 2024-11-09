import React from 'react'; import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { ComboCalculator } from './comboCalculator/comboCalculator';
import { DanceMoves } from './danceMoves/danceMoves';
import { Login } from './login/login';
import { MyMoves } from './myMoves/myMoves';
import { Register } from './register/register';
import { Share } from './share/share';
import { Welcome } from './welcome/welcome'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (
        <BrowserRouter>
            <div>
                <link rel="icon" type="image/x-icon" href="favicon-32x32.png"></link>
                <header class="sticky-top">
                    <nav class="navbar navbar-expand-sm bg-light navbar-light">
                        <div class="container-fluid">
                            <ul class="navbar-nav nav-tabs me-auto mb-2 mb-lg-0">
                                <NavLink className='nav-link' to=''>Home</NavLink>
                                <NavLink className='nav-link' to='DanceMoves'>Dance Moves</NavLink>
                                <NavLink className='nav-link' to='MyMoves'>My Moves</NavLink>
                                <NavLink className='nav-link' to='ComboCalculator'>Combo Calculator</NavLink>
                                <NavLink className='nav-link' to='Share'>Share</NavLink>
                                <NavLink className='nav-link' to='About'>About</NavLink>
                                <NavLink className='nav-link' to='Login'>Login</NavLink>
                                <li class="nav-item">
                                    <span class="navbar-text">UserName Placeholder</span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Welcome />} exact />
                    <Route path='/DanceMoves' element={<DanceMoves />} />
                    <Route path='/MyMoves' element={<MyMoves />} />
                    <Route path='/ComboCalculator' element={<ComboCalculator />} />
                    <Route path='/Share' element={<Share />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer>
                    <nav className="navbar bg-light">
                        <div className="container-fluid justify-content-center text-muted">
                            <div className="nav-item px-2">Joshua Culmer</div>
                            <div className="nav-item px-2">
                                <a href="https://github.com/joshuaculmer/startup">https://github.com/joshuaculmer/startup</a>
                            </div>
                        </div>
                    </nav>
                </footer>


            </div >
        </BrowserRouter>
    );
}







function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;