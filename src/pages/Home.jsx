import React from "react";
import { Link } from "react-router-dom"

function Home() {
    return (
        <main className="main">
            <div className="container">
                <h1 className="main__title">Organic Food Store</h1>
                <p className="main__subtitle">Current delivery lead times are between 5-7 working days</p>
                <div className="main__button"><Link to="/shop">Shop now</Link></div>
            </div>
        </main>

    );
}

export default Home;