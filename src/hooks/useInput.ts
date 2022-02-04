import React, { useState } from 'react';

export const useInput = <T>(initialVal: string): any => {
    const [value, setValue] = useState(initialVal);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const newVal = e.target.value;
        setValue(newVal);
    };

    return [value, setValue, onChange] as const;
};
