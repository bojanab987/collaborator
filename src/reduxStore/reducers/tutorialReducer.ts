import { Action } from 'redux';
import actionTypes from '@reduxStore/actions/actionTypes';
import {
    handleAddTutorial,
    handleDeleteTutorial,
    initTutorials,
} from '@utils/tutorials';
import { ITutorialItem } from '@components/TutorialItem/types';

const initialState = {
    tutorials: initTutorials,
};

const tutorialReducer = (
    state = initialState,
    action: Action & { payload: { type: ITutorialItem } }
) => {
    switch (action.type) {
        case actionTypes.ADD_TUTORIAL:
            return {
                ...state,
                tutorials: handleAddTutorial(state, action.payload.type),
            };
        case actionTypes.DELETE_TUTORIAL:
            return {
                ...state,
                tutorials: handleDeleteTutorial(state, action.payload.type.id),
            };
        default:
            return initialState;
    }
};

export default tutorialReducer;
