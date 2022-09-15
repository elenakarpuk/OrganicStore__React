import React from "react";
import Button from "../Button";
import styles from "./Card.module.css"


function Card({ id, imageUrl, title, price, subtitle }) {
    return (
        <div className={styles.card}>
            <div className={styles.image}><img src={imageUrl} alt="organic-food" /></div>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.subtitle} >{subtitle}</p>
            <div className={styles.price}><b>{price} &euro;</b></div>
            <Button />
        </div>
    )
}

export default Card;