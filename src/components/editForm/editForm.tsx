import React from 'react';
import { ButtonItem } from '../button/button';
import './style.css';

type EditParams = {
    value: string;
    styleEdit: string;
    onSave: (param: any) => void;
    onChange: (param: any) => void;
    onCancel: (param: any) => void;
};

export const EditForm = (props: EditParams): JSX.Element => {
    const { value, onChange, onSave, onCancel, styleEdit } = props;
    const style = `edit-form ${styleEdit}`;
    return (
        <div className={style}>
            <label className="edit-form__label" htmlFor="">
                <input className="edit-form__input" type="text" value={value} onChange={onChange} />
            </label>
            <div className="edit-form__buttons">
                <ButtonItem stylebtn={'edit-button'} title={'cancel'} label={'cancel'} onSimpleClick={onCancel} />
                <ButtonItem stylebtn={'edit-button'} title={'save'} label={'save'} onSimpleClick={onSave} />
            </div>
        </div>
    );
};
