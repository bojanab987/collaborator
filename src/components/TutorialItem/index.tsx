import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsTypeTutorialItem } from './types';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { deleteTutorial } from '@reduxStore/actions/tutorial';

const TutorialItem = ({ tutorialItem }: PropsTypeTutorialItem) => {
    const dispatch = useDispatch();
    return (
        <div>
            <h2>{tutorialItem.title}</h2>
            <a href={tutorialItem.link}>Click to see tutorial</a>
            <button onClick={() => dispatch(deleteTutorial(tutorialItem.id))}>
                <FontAwesomeIcon icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default TutorialItem;
