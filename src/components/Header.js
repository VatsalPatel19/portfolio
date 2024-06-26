import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Header.css';

function Header() {
    useEffect(() => {
        window.addEventListener('scroll', scrollFunction);
        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []);

    function scrollFunction() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                navbar.style.opacity = '0.5';
                navbar.style.background = 'black';
            } else {
                navbar.style.background = 'none';
                navbar.style.opacity = '1';
            }
        }
    }

    return (
        <>
            {/* navbar start */}
            <nav id="navbar" className="container-fluid navbar navbar-expand-lg">
                {/* logo */}
                <h3 id="navbar-item"><i><b>MY PORTFOLIO</b></i></h3>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* navbar items */}
                        <li className="nav-item">
                            <Link id="navbar-item" className="nav-link" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link id="navbar-item" className="nav-link" to="/About">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link id="navbar-item" className="nav-link" to="/Project">
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Header;
