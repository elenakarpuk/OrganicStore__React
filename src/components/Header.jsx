import React from "react";
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="container">
            <header className="header">
                <Link to="/">
                    <div className="header__logo">
                        <img width={150} height={150} src="images/logo.png" alt="logo" />
                    </div>
                </Link>

                <nav className="header__nav nav">
                    <ul className="nav__list">
                        <li><Link to="/shop">Our Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/recipes">Recipes</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                    <ul className="nav__right">
                        <li className="nav__search">
                            <input type="text" name="search" placeholder="Search..." />
                            <img width={29} height={29} src="images/header-search.svg" alt="header-search" />
                        </li>
                        <li className="nav__line"></li>
                        <li className="nav__cart">
                            <img width={29} height={29} src="images/header-cart.svg" alt="header-cart" />
                        </li>
                    </ul>
                </nav>
            </header>
        </div >

    );
}

export default Header;