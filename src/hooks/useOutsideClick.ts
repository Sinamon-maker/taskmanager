import { useEffect, useState, useRef } from 'react';

export const useOnClickOutside = (initialExpanded: boolean): any => {
    const [isExpanded, setExpanded] = useState(initialExpanded);
    const wrapperRef = useRef<HTMLInputElement>(null);

    function handleClickOutside(event: MouseEvent): void {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target as Element)) {
            setExpanded(false);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [wrapperRef]);

    return [isExpanded, setExpanded, wrapperRef];
};
