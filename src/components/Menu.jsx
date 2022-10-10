import React from "react";
import { Link } from "react-router-dom"

function Menu({ onClose }) {

    return (
        <div className="overlay">
            <div className="overlay__manu manu">
                <h2>Manu < img onClick={onClose} src="/images/remove.svg" alt="remove" /> </h2>
                <ul className="menu__list">
                    <li><Link to="/shop">Our Shop</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Menu;