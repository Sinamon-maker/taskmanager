import React from 'react';
import { ButtonItem } from '../button/button';
import './style.css';

type ActionProps = {
    wrapperRef: React.RefObject<HTMLInputElement>;
    isExpanded: boolean;
    onClickDetailes: (param: any) => void;
    onAddCard: (param: any) => void;
    onRenameCard: (param: any) => void;
    onRemove: (param: any) => void;
    onUp: (param: any) => void;
    onDown: (param: any) => void;
    onAddSubCard: (param: any) => void;
};

export const ListActions = (props: ActionProps): JSX.Element => {
    const { isExpanded, wrapperRef, onClickDetailes, onAddCard, onRenameCard, onRemove, onUp, onDown, onAddSubCard } =
        props;

    return (
        <div className="actions-content" ref={wrapperRef}>
            <ButtonItem
                label={'see more'}
                title={'Detailes'}
                onSimpleClick={onClickDetailes}
                stylebtn={'actions-detailes'}
            />
            {isExpanded && (
                <ul className="actions-list">
                    <li className="actions-list__item">
                        {' '}
                        <ButtonItem
                            label={'add new card'}
                            title={'Добавить карточку'}
                            onSimpleClick={onAddCard}
                            stylebtn={'actions-item'}
                        />
                    </li>
                    <li className="actions-list__item">
                        {' '}
                        <ButtonItem
                            label={'rename card'}
                            title={'Переименовать карточку'}
                            onSimpleClick={onRenameCard}
                            stylebtn={'actions-item'}
                        />
                    </li>
                    <li className="actions-list__item">
                        {' '}
                        <ButtonItem
                            label={'remove card'}
                            title={'Удалить карточку'}
                            onSimpleClick={onRemove}
                            stylebtn={'actions-item'}
                        />
                    </li>
                    <li className="actions-list__item">
                        {' '}
                        <ButtonItem
                            label={'shift up card'}
                            title={'Переместить вверх'}
                            onSimpleClick={onUp}
                            stylebtn={'actions-item'}
                        />
                    </li>
                    <li className="actions-list__item">
                        {' '}
                        <ButtonItem
                            label={'shift down card'}
                            title={'Переместить вниз'}
                            onSimpleClick={onDown}
                            stylebtn={'actions-item'}
                        />
                    </li>
                    <li className="actions-list__item">
                        {' '}
                        <ButtonItem label={'change size'} title={'Изменить размер'} stylebtn={'actions-item'} />
                    </li>
                    <li className="actions-list__item">
                        {' '}
                        <ButtonItem
                            label={'add subcard'}
                            title={'Добавить дечернюю карточку'}
                            onSimpleClick={onAddSubCard}
                            stylebtn={'actions-item'}
                        />
                    </li>
                </ul>
            )}
        </div>
    );
};
