import React from 'react';
import styles from './Rate_card.module.scss';

function Rate(rate) {
    return (
        <>
            <div className={`${styles.rate} ${(rate.selected ? `${styles.rate_selected}` : ``)}`}>
                <div className={`${styles.title} ${styles[rate.title_color]} ${styles.color_text} ${(rate.isSelected ? `${styles.title_hov}` : ``)}`}>{rate.name}</div>
                <div className={`${styles.price_container} ${styles[rate.price_color]} ${styles.color_text}`}>
                    <span className={styles.currency}>{rate.currency}</span>
                    <span className={styles.price}>{rate.price}</span>
                    <span className={styles.period}>/{rate.period}</span>
                </div>
                <div className={styles.speed}>До {rate.speed} Мбит/сек</div>
                <div className={`${styles.traffic} ${styles.color_traffic}`}>
                    <span>{rate.traffic}</span>
                </div>
            </div >
        </>
    );
}

export default Rate;