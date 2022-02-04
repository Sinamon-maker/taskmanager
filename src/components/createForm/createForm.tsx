import React from 'react';
import { ButtonItem } from '../button/button';
import './style.css';

type CreateParams = {
    value: string;
    titleInput: string | null;
    onSave: (param: any) => void;
    onChange: (param: any) => void;
    onCancel: (param: any) => void;
};

export const CreateForm = (props: CreateParams): JSX.Element => {
    const { value, onChange, onSave, onCancel, titleInput } = props;

    return (
        <div className="create-form">
            <div className="create-form__content">
                <label className="create-form__label" htmlFor="">
                    {titleInput}
                    <input className="create-form__input" type="text" value={value} onChange={onChange} />
                </label>
                <div className="create-form__buttons">
                    <ButtonItem stylebtn={'edit-button'} title={'cancel'} label={'cancel'} onSimpleClick={onCancel} />
                    <ButtonItem stylebtn={'edit-button'} title={'save'} label={'save'} onSimpleClick={onSave} />
                </div>
            </div>
        </div>
    );
};
