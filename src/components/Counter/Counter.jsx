import React, { useState } from 'react';
import styles from './Counter.module.scss';

// class Counter extends React.Component {
//     state = {
//         count: 0
//     };
//     handleClick = () => {
//         this.setState(({ count }) => ({
//             count: count + 1
//         }));
//     };
//     render() {
//         return <button onClick={this.handleClick}>{this.state.count}</button>;
//     }
// }

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div className={styles.btn_container}>
            <button onClick={handleClick}
                className={styles.btn}>Click Counter: {count}</button>
        </div>
    )
}


export default Counter;