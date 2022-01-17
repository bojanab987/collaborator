import { useEffect, useState } from 'react';
import styles from './ShowOff.module.css';
import { useInterval } from './useInterval';

const ShowOff = () => {
    const [message, setMessage] = useState('');
    const [isYellow, setIsYellow] = useState(true);

    const printMessage = () => {
        setMessage('I am Async');
    };

    const changeColor = () => {
        setIsYellow((isYellow) => !isYellow);
    };

    useEffect(() => {
        const timer = setTimeout(() => printMessage(), 5000);
        return () => clearTimeout(timer);
    }, []);

    useInterval(() => {
        changeColor();
    }, 1000);

    return (
        <div
            className={
                isYellow
                    ? `${styles.message} ${styles.pink}`
                    : `${styles.message} ${styles.yellow}`
            }
        >
            {message}
        </div>
    );
};

export default ShowOff;
