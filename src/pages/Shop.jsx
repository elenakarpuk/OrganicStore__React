import React from "react";

import Card from "../components/Card/index.jsx";

function Shop({ items, onAddToCart, searchValue }) {
    return (
        <div className="shop">
            <div className="container">
                <div className="shop__content content">
                    <h1 className="shop__title title">{searchValue ? `Search by request: "${searchValue}"` : `Our Products`}</h1>
                    <div className="shop__items">
                        {items
                            .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                            .map((item, index) => (
                                <Card
                                    key={index}
                                    id={item.id}
                                    parentId={item.id}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                    onPlus={(obj) => onAddToCart(obj)}
                                />
                            ))}
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Shop;