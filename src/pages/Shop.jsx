import React from "react";

import Card from "../components/Card/index.jsx";

function Shop({ items }) {
    return (
        <div className="shop">
            <div className="container">
                <div className="shop__content content">
                    <h1 className="shop__title title">Our <span>Products</span></h1>
                    {/* <h1 className="content__title">{searchValue ? `Search by request: "${searchValue}"` : 'Our Products'}</h1> */}
                    <div className="shop__items">
                        {items.map((item, index) => (
                            <Card
                                key={index}
                                id={item.id}
                                parentId={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                price={item.price}
                                imageUrl={item.imageUrl}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Shop;