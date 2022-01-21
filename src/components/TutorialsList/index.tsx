import { useDispatch, useSelector } from 'react-redux';
import TutorialItem from '@components/TutorialItem';
import { ITutorialItem } from '@components/TutorialItem/types';
import styles from './TutorialsList.module.css';
import { RootState } from '@reduxStore/reducers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { modalTypes } from '@reduxStore/actions/modalTypes';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddTutorialModal from '@components/modals/AddTutorialModal/AddTutorialModal';
import { open } from '@reduxStore/actions/modal';

const TutorialsList = () => {
    const dispatch = useDispatch();
    const tutorials = useSelector(
        (state: RootState) => state.tutorial.tutorials
    );

    const modal = useSelector(
        (state: RootState) => state.modal.type[modalTypes.addNewTutorial]
    );

    return (
        <div className={styles.container}>
            {tutorials.map((tutorial: ITutorialItem) => (
                <TutorialItem key={tutorial.id} tutorialItem={tutorial} />
            ))}
            <div>
                <p className={styles.paragraph}>
                    Click button below to add new tutorial
                </p>
                <button
                    className={styles['plus-btn']}
                    onClick={() => dispatch(open(modalTypes.addNewTutorial))}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        className={styles['plus-icon']}
                    />
                </button>
            </div>

            <div>{modal ? <AddTutorialModal /> : null}</div>
        </div>
    );
};

export default TutorialsList;
