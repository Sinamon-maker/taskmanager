import React, { useState } from 'react';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { CardsObj } from '../../app/features/cards/cardsSlice';
import { ListActions } from '../listActions/listActions';
import { CreateForm } from '../createForm/createForm';
import { CardTitle } from '../cardTitle/cardTitle';
import { useDispatch } from 'react-redux';
import { onClickAction, createCard, changeNameCard } from '../../app/features/cards/cardsSlice';
import './style.css';
import { useOnClickOutside } from '../../hooks/useOutsideClick';
import { useInput } from '../../hooks/useInput';

export const CardContainer: React.FC<CardsObj> = ({ name, id, parentId, children }) => {
    const [value, setValue, onChangeValueTitle] = useInput(name);
    const [valueNew, setValueNew, onCreateValue] = useInput('');
    const [isEdited, setEdit] = useState(false);
    const [paramCreate, setParamCreate] = useState('new');

    const titleInput = paramCreate === 'new' ? 'creating new card' : `create new subcard for ${name}`;

    const [isExpanded, setExpanded, wrapperRef] = useOnClickOutside(false);
    const [isCreate, setIsCreate, wrapperRefCreate] = useOnClickOutside(false);

    const subCards = useSelector((state: RootState) => state.cards.subcards);
    const dispatch = useDispatch();

    const hasSubCards = typeof subCards[id] === 'undefined' ? false : true;

    const onClickDetailes = (): void => {
        setExpanded(!isExpanded);
    };

    const onSaveChangeNameCard = (): void => {
        setEdit(false);
        dispatch(changeNameCard({ value, id, parentId }));
    };

    const onSaveCreateCard = (): void => {
        setIsCreate(false);
        dispatch(createCard({ valueNew, paramCreate, id, parentId }));
        setValueNew('');
    };

    const onCanselEditName = (): void => {
        setEdit(false);
        setExpanded(false);
        setValue(name);
    };

    const onCanselCreate = (): void => {
        setIsCreate(false);
    };

    const onAddCard = (): void => {
        setExpanded(false);
        setParamCreate('new');
        setEdit(false);
        console.log(isCreate, isExpanded);
        setIsCreate(true);

        if (isEdited) {
            setEdit(false);
        }
    };

    const onAddSubCard = (): void => {
        setParamCreate('sub');
        setEdit(false);
        setIsCreate(true);
    };

    const onRenameCard = (): void => {
        setEdit(!isEdited);
        setExpanded(false);
        if (isCreate) {
            setIsCreate(false);
        }
    };

    const onRemove = (): void => {
        dispatch(onClickAction({ param: 'remove', id, parentId }));
    };
    const onUp = (): void => {
        dispatch(onClickAction({ param: 'up', id, parentId }));
    };
    const onDown = (): void => {
        dispatch(onClickAction({ param: 'down', id, parentId }));
    };

    return (
        <li className="cardItem" ref={wrapperRefCreate}>
            {isCreate && (
                <CreateForm
                    value={valueNew}
                    titleInput={titleInput}
                    onSave={onSaveCreateCard}
                    onChange={onCreateValue}
                    onCancel={onCanselCreate}
                />
            )}

            <CardTitle
                name={name}
                id={id}
                hasSubCards={hasSubCards}
                value={value}
                isEdited={isEdited}
                onSave={onSaveChangeNameCard}
                onChangeValueTitle={onChangeValueTitle}
                onCanselEditName={onCanselEditName}
            />
            {children}
            <ListActions
                wrapperRef={wrapperRef}
                isExpanded={isExpanded}
                onClickDetailes={onClickDetailes}
                onAddCard={onAddCard}
                onRenameCard={onRenameCard}
                onRemove={onRemove}
                onUp={onUp}
                onDown={onDown}
                onAddSubCard={onAddSubCard}
            />
        </li>
    );
};
