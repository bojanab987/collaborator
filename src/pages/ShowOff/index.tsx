import { useEffect, useState } from 'react';
import styles from './ShowOff.module.css';
import { useInterval } from './useInterval';
import { useInput } from './useInput';

const ShowOff = () => {
    const [message, setMessage] = useState('');
    const [isYellow, setIsYellow] = useState(true);
    const [count, setCount] = useState(0);
    const [question, setQuestion] = useState('');
    const [isBtnVisible, setBtnVisible] = useState(false);

    const [firstName, isValidFirstName, handleChangeFirstName] = useInput();
    const [lastName, isValidLastName, handleChangeLastName] = useInput();

    const printMessage = (msg: string) => {
        setMessage(msg);
    };

    const changeColor = () => {
        setIsYellow((isYellow) => !isYellow);
    };

    const askQuestion = (str: string) => {
        setQuestion(str);
        setBtnVisible(true);
    };

    const handleClick = () => {
        setBtnVisible(false);
        setQuestion('');
    };

    useEffect(() => {
        const timer = setTimeout(() => printMessage('I am Async'), 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer2 = setTimeout(
            () => askQuestion('Are you asleep?'),
            1000 * 60
        );
        return () => clearTimeout(timer2);
    }, []);

    useInterval(() => {
        changeColor();
        setCount((count) => count + 1);
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
            <p className={styles.white}>{count}</p>
            <div className={styles.question}>
                {question}
                <button
                    className={
                        isBtnVisible
                            ? `${styles.btn} ${styles.visible}`
                            : ` ${styles.btn} ${styles.hidden}`
                    }
                    onClick={handleClick}
                >
                    NO
                </button>
            </div>
            <div className={styles.form}>
                <div className={styles.input_wrapper}>
                    <label>First Name:</label>
                    <input
                        className={styles.input_field}
                        type="text"
                        onChange={handleChangeFirstName}
                        value={firstName}
                    />
                </div>
                <div className={styles.input_wrapper}>
                    <label>Last Name:</label>
                    <input
                        className={styles.input_field}
                        type="text"
                        onChange={handleChangeLastName}
                        value={lastName}
                    />
                </div>
                {(!isValidFirstName || !isValidLastName) && (
                    <div className={styles.error}>
                        Input cannot be empty or contain special characters:#,$,
                        %
                    </div>
                )}
            </div>
        </div>
    );
};

export default ShowOff;
