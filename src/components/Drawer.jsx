import React from "react";
import { AppContext } from "../App";

function Drawer({ onClose, onRemove }) {
    const { cartItems } = React.useContext(AppContext);

    const totalPrice = cartItems.reduce((prev, obj) => (Number(obj.price.replace(',', '.'))) + prev, 0) // 0 - точка отсчета

    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Cart < img onClick={onClose} src="/images/remove.svg" alt="remove" /> </h2>
                <div className="drawer__items">
                    <div className="items">
                        {cartItems.map((obj) => (
                            <div key={obj.id} className="cart__item">
                                <div className="cart__image"> <img width={31.7} height={66.6} src={obj.imageUrl} alt="item" /> </div>
                                <div className="cart__name">
                                    <p>{obj.title}</p>
                                    <b>{obj.price} &euro;</b>
                                </div>
                                <div className="cart__remove"><img onClick={() => onRemove(obj.id)} src="/images/remove.svg" alt="remove" /></div>
                            </div>
                        ))}
                    </div>
                    <div className="result__block">
                        <div className="result">
                            <span>Итого: </span>
                            <div></div>
                            <b>{Math.round(totalPrice * 100) / 100} &euro;</b>
                        </div>
                        <button className="gold__button" >Оформить заказ <img src="/images/arrow.svg" alt="arrow" /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Drawer;