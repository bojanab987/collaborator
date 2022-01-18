import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | undefined) {
    const savedCallback = useRef(callback);

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }

        const id = setInterval(tick, delay);
        return () => clearInterval(id);
    }, [delay]);
}
