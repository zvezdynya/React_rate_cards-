import React from 'react';
import rates from './data/rates.json';
import styles from './App.module.scss';
import Rate from './components/Rate_card';

function App() {
  //week23
  //   return (
  //     <div className={styles.rates_container}>
  //       {rates.map((rate, index) => (
  //         < Rate
  //           key={index}
  //           name={rate.name}
  //           price={rate.price}
  //           currency={rate.currency}
  //           period={rate.period}
  //           speed={rate.speed}
  //           traffic={rate.traffic}
  //           title_color={rate.title_color}
  //           price_color={rate.price_color}
  //           selected={rate.selected} />
  //       ))}
  //     </div>
  //   );
  // }

  //week24

  return (
    <div className={styles.rates_container}>
      <Rate />
    </div>
  );
}

export default App;
