import React, { useState } from 'react';
import rates from './data/rates.json';
import styles from './App.module.scss';
import Rate from './components/Rate_card_23w/Rate_card';
import Rate24 from './components/Rate_card_24w/Rate_card_24w';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <>
      <div>Week 23</div>
      <div className={styles.rates_container}>
        {rates.map((rate, index) => (
          < Rate
            key={index}
            {...rate} />
        ))}
      </div>
      <div>
        Week 24
      </div>
      <div className={styles.rates_container}>
        {rates.map((rate) => (
          <Rate24 key={rate.id}
            {...rate}
            index={rate.index} />
        ))}
      </div>
      <Counter />
    </>
  );
}

export default App;
