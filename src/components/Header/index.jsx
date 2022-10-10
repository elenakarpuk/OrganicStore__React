import React from "react";
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import { AppContext } from "../../App";

function Header(props) {
    const { searchOpened, searchValue, onChangeSearchInput } = React.useContext(AppContext);
    return (
        <div className="container">
            <header className={styles.header}>
                <Link to="/">
                    <div className={styles.header__logo}>
                        <img src="images/logo.png" alt="logo" />
                    </div>
                </Link>
                <nav className={styles.header__nav}>
                    <ul className={styles.nav__list}>
                        <li><Link to="/shop">Our Shop</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/recipes">Recipes</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                    <ul className={styles.nav__right}>
                        <li className={styles.nav__search}>
                            {searchOpened && <input onChange={onChangeSearchInput} value={searchValue} type="text" name="search" placeholder="Search..." />}
                            <img onClick={props.onSearch} width={29} height={29} src="images/header-search.svg" alt="header-search" />
                        </li>
                        <li className={styles.nav__line}></li>
                        <li onClick={props.onClickCart} className={styles.nav__cart}>
                            <img width={29} height={29} src="images/header-cart.svg" alt="header-cart" />
                        </li>
                    </ul>
                    <button onClick={props.onBurger} className={styles.nav__burger}>
                        <span className={styles.ico__burger} ></span>
                        <span className={styles.ico__burger} ></span>
                        <span className={styles.ico__burger} ></span>
                    </button>
                </nav>
            </header>
        </div>
    );
}

export default Header;