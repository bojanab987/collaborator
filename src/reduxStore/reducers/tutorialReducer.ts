import { Action } from 'redux';
import actionTypes from '@reduxStore/actions/actionTypes';
import {
    handleAddTutorial,
    handleDeleteTutorial,
    initTutorials,
} from '@utils/tutorials';

const initialState = {
    tutorials: initTutorials,
};

const tutorialReducer = (
    state = initialState,
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

export default tutorialReducer;
