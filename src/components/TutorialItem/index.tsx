import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsTypeTutorialItem } from './types';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteTutorial } from '@reduxStore/actions/tutorial';
import styles from './TutorialItem.module.css';

const TutorialItem = ({ tutorialItem }: PropsTypeTutorialItem) => {
    const dispatch = useDispatch();
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>{tutorialItem.title}</h2>
            <div className={styles.link_wrapper}>
                <a
                    className={styles.link}
                    target="_blank"
                    href={tutorialItem.link}
                    rel="noreferrer"
                >
                    Click to see tutorial
                </a>
                <button
                    className={styles.removeBtn}
                    onClick={() => dispatch(deleteTutorial(tutorialItem.id))}
                >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </div>
        </div>
    );
};

export default TutorialItem;
