import React, { useState } from 'react';

export function useInput(): any {
    const [isValid, setIsValid] = useState(true);
    const [value, setValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        checkValidation(event.target.value);
        setValue(event.target.value);
    };

    const checkValidation = (input: string) => {
        if (
            !input ||
            input.includes('#') ||
            input.includes('$') ||
            input.includes('%')
        ) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    };

    return [value, isValid, handleChange];
}
