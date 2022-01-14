import { ITutorialItem, ITutorialState } from '@components/TutorialItem/types';
import { tutorials } from '@components/TutorialsList/tutorialsData';

function getAllTutorials() {
    return tutorials;
}

export const initTutorials = getAllTutorials();

export const handleAddTutorial = (
    state: ITutorialState,
    tutorial: ITutorialItem
) => {
    const newState = state.tutorials;
    return [...newState, tutorial];
};

export const handleDeleteTutorial = (
    state: ITutorialState,
    tutorialID: number
) => {
    const newTutorials = state.tutorials.filter(
        (tutorial) => tutorial.id !== tutorialID
    );
    return newTutorials;
};

export default function getRandomID() {
    return Date.now();
}
