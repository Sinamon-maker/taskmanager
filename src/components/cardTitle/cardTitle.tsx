import React, { useState } from 'react';
import { EditForm } from '../editForm/editForm';
import { ButtonItem } from '../button//button';
import { ListCards } from '../listCards/listCards';
import './style.css';

type CardTytleType = {
    name: string;
    id: string;
    value: string;
    isEdited: boolean;
    hasSubCards: boolean;
    onSave: (param: any) => void;
    onChangeValueTitle: (param: any) => void;
    onCanselEditName: (param: any) => void;
};

export const CardTitle = (props: CardTytleType): JSX.Element => {
    const { name, onCanselEditName, onChangeValueTitle, onSave, value, isEdited, hasSubCards, id } = props;
    const [isMore, setIsMore] = useState(false);

    const onSeeSubCards = (): void => {
        setIsMore(!isMore);
        console.log('see more');
    };
    console.log('hasSubCards', hasSubCards);
    return (
        <div className="card-title">
            <h3 className="card-title__heading">{name}</h3>
            {hasSubCards && (
                <ButtonItem
                    label={'see subcards'}
                    title={'icon'}
                    onSimpleClick={onSeeSubCards}
                    stylebtn={'button-more'}
                />
            )}

            {isMore && (
                <div className="subcards">
                    <ListCards parentId={id} />
                </div>
            )}

            {isEdited && (
                <EditForm
                    value={value}
                    styleEdit={'edit-form-change'}
                    onSave={onSave}
                    onChange={onChangeValueTitle}
                    onCancel={onCanselEditName}
                />
            )}
        </div>
    );
};
