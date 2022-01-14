import { useDispatch, useSelector } from 'react-redux';
import TutorialItem from '@components/TutorialItem';
import { ITutorialItem } from '@components/TutorialItem/types';
import { addTutorial } from '@reduxStore/actions/tutorial';
import styles from './TutorialsList.module.css';
import { RootState } from '@reduxStore/reducers';
import React, { useState } from 'react';
import getRandomID from '@utils//tutorials';

const index = () => {
    const [newTutorial, setNewTutorial] = useState({
        id: 0,
        title: '',
        link: '',
    });
    const dispatch = useDispatch();
    const tutorials = useSelector(
        (state: RootState) => state.tutorial.tutorials
    );

    const handleTitleInputOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setNewTutorial({ ...newTutorial, title: event.target.value });
    };

    const handleLinkInputOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const idForNewTutorial = getRandomID();
        setNewTutorial({
            ...newTutorial,
            link: event.target.value,
            id: idForNewTutorial,
        });
    };

    const handleOnClick = () => {
        console.log(newTutorial);

        dispatch(addTutorial(newTutorial));

        console.log(newTutorial);
    };

    return (
        <div>
            {tutorials.map((tutorial: ITutorialItem) => (
                <TutorialItem key={tutorial.id} tutorialItem={tutorial} />
            ))}

            <div>
                <label>Tutorial title:</label>
                <input
                    type="text"
                    onChange={handleTitleInputOnChange}
                    value={newTutorial.title}
                />

                <label>Tutorial link:</label>
                <input
                    type="text"
                    onChange={handleLinkInputOnChange}
                    value={newTutorial.link}
                />

                <button onClick={handleOnClick}>Add tutorial to List</button>
            </div>
        </div>
    );
};

export default index;
