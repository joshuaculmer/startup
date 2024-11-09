import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (
        <div>
            <link rel="icon" type="image/x-icon" href="favicon-32x32.png"></link>
            <header class="sticky-top">
                <nav class="navbar navbar-expand-sm bg-light navbar-light">
                    <div class="container-fluid">
                        <ul class="navbar-nav nav-tabs me-auto mb-2 mb-lg-0">
                            <a class="nav-item nav-link" href="index.html">Home</a>
                            <a class="nav-item nav-link" href="dancemoves.html">Dance Moves</a>
                            <a class="nav-item nav-link" href="myMoves.html">MyDance Moves</a>
                            <a class="nav-item nav-link" href="comboCalculator.html">Combo Calculator</a>
                            <a class="nav-item nav-link" href="share.html">Share</a>
                            <a class="nav-item nav-link" href="about.html">About</a>
                            <a class="nav-item nav-link active" href="login.html">Login</a>
                            <li class="nav-item">
                                <span class="navbar-text">UserName Placeholder</span>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main>App components go here</main>

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
    );
}







function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;