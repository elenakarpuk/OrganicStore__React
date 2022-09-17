import React from "react";
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__lists">
                    <ul className="footer__general">
                        <li><b>General</b></li>
                        <li><Link to="/shop">Our Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/recipes">Recipes</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                    <ul className="footer__webshop">
                        <li><b>Webshop</b></li>
                        <li>Delivery Information</li>
                        <li>Returns &amp; Cancellations</li>
                    </ul>
                    <ul className="footer__legal">
                        <li><b>Legal</b></li>
                        <li>Terms of Use</li>
                        <li>Terms of Purchase</li>
                        <li>Privacy Policy</li>
                        <li>Modern Slavery Policy</li>
                    </ul>
                    <ul className="footer__contact">
                        <li><b>Contact</b></li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;