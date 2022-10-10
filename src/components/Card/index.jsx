import React from "react";
import styles from "./Card.module.css"
import { AppContext } from "../../App";


function Card({ id, imageUrl, title, price, subtitle, onPlus }) {
    const { isItemAddedToCart } = React.useContext(AppContext);

    const onClickPlus = () => {
        onPlus({ id, parentId: id, title, price, imageUrl });
    }


    return (
        <div className={styles.card}>
            <div className={styles.image}><img src={imageUrl} alt="organic-food" /></div>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.subtitle} >{subtitle}</p>
            <div className={styles.price}><b>{price} &euro;</b></div>
            <div className={styles.button} onClick={onClickPlus} style={isItemAddedToCart(id) ? { backgroundColor: "#e0d1d1" } : { backgroundColor: "#fff" }}>
                <svg width="29" height="29" viewBox="0 0 29 29" fill="#9C9C42" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.301 7.95909C25.2726 7.51795 24.9077 7.17484 24.4655 7.17484H20.0377V5.86666C20.0377 3.24703 17.5532 1.11538 14.5 1.11538C11.4469 1.11538 8.96232 3.24703 8.96232 5.86666V7.17484H4.53455C4.09231 7.17484 3.72742 7.51795 3.6991 7.95909L2.51073 26.9958C2.49657 27.2267 2.57827 27.4522 2.73621 27.621C2.89415 27.7888 3.11526 27.8846 3.34618 27.8846H25.6539C25.8848 27.8846 26.1059 27.7888 26.2639 27.621C26.4218 27.4522 26.5035 27.2267 26.4893 26.9958L25.301 7.95909ZM10.6354 5.86666C10.6354 4.16962 12.3695 2.78846 14.5 2.78846C16.6306 2.78846 18.3647 4.16962 18.3647 5.86666V7.17484H10.6354V5.86666ZM8.96232 8.84792V10.6648C8.96232 11.1266 9.33702 11.5013 9.79886 11.5013C10.2607 11.5013 10.6354 11.1266 10.6354 10.6648V8.84792H18.3647V10.6648C18.3647 11.1266 18.7394 11.5013 19.2012 11.5013C19.663 11.5013 20.0377 11.1266 20.0377 10.6648V8.84792H23.6791L24.4039 20.4484H4.59616L5.32098 8.84792H8.96232ZM4.23609 26.2115L4.52651 21.5637H24.4735L24.764 26.2115H4.23609Z"
                        fill="#9C9C42" />
                </svg>
                <span>Add to cart</span>
            </div>
        </div>
    )
}

export default Card;