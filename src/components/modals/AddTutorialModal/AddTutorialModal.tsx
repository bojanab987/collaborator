import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { addTutorial } from '@reduxStore/actions/tutorial';
import { useDispatch } from 'react-redux';
import styles from './AddTutorialModal.module.css';
import { useTranslation } from 'react-i18next';
import { close } from '@reduxStore/actions/modal';
import { modalTypes } from '@reduxStore/actions/modalTypes';

const AddTutorialModal = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [newTutorial, setNewTutorial] = useState({
        id: 0,
        title: '',
        link: '',
    });

    const handleTitleInputOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewTutorial({ ...newTutorial, title: event.target.value });
    };

    const handleLinkInputOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewTutorial({
            ...newTutorial,
            link: event.target.value,
        });
    };

    const handleOnClick = () => {
        dispatch(addTutorial(newTutorial));
        setNewTutorial({ id: 0, link: '', title: '' });
    };
    return ReactDom.createPortal(
        <div className={styles.modal_container}>
            <h2 className={styles.modal_title}>Add New Tutorial</h2>
            <div className={styles.modal_body}>
                <div className={styles.input_wrapper}>
                    <label className={styles.label}>Tutorial title:</label>
                    <input
                        className={styles.input}
                        type="text"
                        onChange={handleTitleInputOnChange}
                        value={newTutorial.title}
                    />
                </div>
                <div className={styles.input_wrapper}>
                    <label className={styles.label}>Tutorial link:</label>
                    <input
                        className={styles.input}
                        type="text"
                        onChange={handleLinkInputOnChange}
                        value={newTutorial.link}
                    />
                </div>
            </div>
            <div className={styles.modal_buttons}>
                <button
                    type="button"
                    className={`${styles.btn} ${styles.add_btn}`}
                    onClick={handleOnClick}
                >
                    Add tutorial to List
                </button>
                <button
                    type="button"
                    className={`${styles.btn} ${styles.discard_btn}`}
                    onClick={() => dispatch(close(modalTypes.addNewTutorial))}
                >
                    {t('description.discard')}
                </button>
            </div>
        </div>,
        document.getElementById('tutorial')!
    );
};

export default AddTutorialModal;
