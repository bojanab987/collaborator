import itemStyles from '@components/TutorialItem/TutorialItem.module.css';
import formStyles from '@components/modals/AddTutorialModal/AddTutorialModal.module.css';
import { ITutorialItem, ITutorialState } from '@components/TutorialItem/types';
import styles from '@components/TutorialsList/TutorialsList.module.css';
import { Action } from 'redux';
import actionTypes from '@reduxStore/actions/actionTypes';
import { useReducer, useState } from 'react';
import {
    handleAddTutorial,
    handleDeleteTutorial,
    initTutorials,
} from '@utils/tutorials';
import { addTutorial, deleteTutorial } from '@reduxStore/actions/tutorial';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const initialState = {
    tutorials: initTutorials,
};

const tutorialsReducer2 = (
    state: ITutorialState,
    action: Action & { payload: any }
) => {
    switch (action.type) {
        case actionTypes.ADD_TUTORIAL: {
            const newTutorials = handleAddTutorial(state, action.payload);
            return {
                ...state,
                tutorials: [...newTutorials],
            };
        }
        case actionTypes.DELETE_TUTORIAL: {
            const newTutorials = handleDeleteTutorial(state, action.payload);
            return {
                ...state,
                tutorials: [...newTutorials],
            };
        }
        default:
            return state;
    }
};

const TutorialsList = () => {
    const [state, dispatch] = useReducer(tutorialsReducer2, initialState);
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

    return (
        <div className={styles.container}>
            {state.tutorials.map((tutorial: ITutorialItem) => (
                <div className={itemStyles.wrapper} key={tutorial.id}>
                    <h2 className={itemStyles.title}>{tutorial.title}</h2>
                    <div className={itemStyles.link_wrapper}>
                        <a
                            className={itemStyles.link}
                            target="_blank"
                            href={tutorial.link}
                            rel="noreferrer"
                        >
                            Click to see tutorial
                        </a>
                        <button
                            className={itemStyles.removeBtn}
                            onClick={() =>
                                dispatch(deleteTutorial(tutorial.id))
                            }
                        >
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                </div>
            ))}
            <div>
                <div className={formStyles.modal_body}>
                    <div className={formStyles.input_wrapper}>
                        <label className={formStyles.label}>
                            Tutorial title:
                        </label>
                        <input
                            className={formStyles.input}
                            type="text"
                            onChange={handleTitleInputOnChange}
                            value={newTutorial.title}
                        />
                    </div>
                    <div className={formStyles.input_wrapper}>
                        <label className={formStyles.label}>
                            Tutorial link:
                        </label>
                        <input
                            className={formStyles.input}
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
                </div>
            </div>
        </div>
    );
};

export default TutorialsList;
