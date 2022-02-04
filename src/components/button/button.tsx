import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './style.css';

type ButtonProps = {
    title: string;
    label: string;
    stylebtn: string;
    onSimpleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ButtonItem = (props: ButtonProps): JSX.Element => {
    const { label, title, stylebtn, onSimpleClick } = props;

    const style = `btn ${stylebtn}`;
    if (title !== 'icon') {
        return (
            <button type="button" aria-label={label} className={style} onClick={onSimpleClick}>
                {title}
            </button>
        );
    }
    return (
        <button type="button" aria-label={label} className={style} onClick={onSimpleClick}>
            <ArrowRightIcon style={{ fontSize: 'large' }} />
        </button>
    );
};
