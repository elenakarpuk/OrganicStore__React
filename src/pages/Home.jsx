import React from "react";
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <main className="main">
                <div className="container">
                    <h1 className="main__title">Organic Food Store</h1>
                    <p className="main__subtitle">Current delivery lead times are between 5-7 working days</p>
                    <div className="main__button"><Link to="/shop">Shop now</Link></div>
                </div>
            </main>

            <div className="about">
                <div className="container">
                    <div className="about__content content">
                        <h1 className="about__title title">About <span>US</span></h1>
                        <div className="about__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod pariatur, quos itaque excepturi, nihil velit, ab explicabo veniam dolor blanditiis incidunt. Cupiditate officia veniam accusamus eum voluptatem amet et cumque!

                        </div>
                        <div className="about__button button-gold"><Link to="/about">Find out more</Link></div>
                    </div>
                </div>
            </div>

        </>


    );
}

export default Home;