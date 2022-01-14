import { ITutorialItem } from '@components/TutorialItem/types';
import actionTypes from '@reduxStore/actions/actionTypes';

export const addTutorial = (tutorial: ITutorialItem) => {
    return {
        type: actionTypes.ADD_TUTORIAL,
        payload: tutorial,
    };
};

export const deleteTutorial = (tutorialID: number) => {
    return {
        type: actionTypes.DELETE_TUTORIAL,
        payload: tutorialID,
    };
};
