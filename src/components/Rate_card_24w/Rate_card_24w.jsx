import React, { useState } from 'react';
import styles from './Rate_card_24w.module.scss';



function Rate24(props, index) {
    const [selected, setSelected] = useState(null);

    const handleChange = (index) => {
        setSelected(
            selected === index ? null : index
        );
    }
    return (
        <React.Fragment {...props}>
            <div onClick={() => handleChange(index)}
                className={`${styles.rate} ${(index === selected && `${styles.rate_selected}`)}`
                }>
                <div className={`${styles.title} ${styles[props.title_color]} ${styles.color_text} ${(index === selected && `${styles.title_hov}`)}`}>
                    {props.name}
                </div>
                <div className={`${styles.price_container} ${styles[props.price_color]} ${styles.color_text}`}>
                    <span className={styles.currency}>{props.currency}</span>
                    <span className={styles.price}>{props.price}</span>
                    <span className={styles.period}>/{props.period}</span>
                </div>
                <div className={styles.speed}>До {props.speed} Мбит/сек</div>
                <div className={`${styles.traffic} ${styles.color_traffic}`}>
                    <span>{props.traffic}</span>
                </div>
            </div >
        </React.Fragment >

    );
}

export default Rate24;