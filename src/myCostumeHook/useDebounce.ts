import { useCallback, useRef } from 'react';

type CallbackFunction<T extends unknown[]> = (...args: T) => void;

export function useDebounce<T extends unknown[]>(
    callback: CallbackFunction<T>,
    delay: number,
): CallbackFunction<T> {
    const timer = useRef<number | undefined>();

    const debounceCallback = useCallback(
        (...args: T) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = window.setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );

    return debounceCallback;
}
