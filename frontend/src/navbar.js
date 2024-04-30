import React from 'react'
import './navbar.css';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand ps-3" href="/">OfferGen</a>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    {/* <li class="nav-item">
                        <a class="nav-link" href="/home">Generate</a>
                    </li> */}
                    <li class="nav-item">
                        <a class="nav-link" href="/aboutus">About Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contactus">Contact Us</a>
                    </li>
                    
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar