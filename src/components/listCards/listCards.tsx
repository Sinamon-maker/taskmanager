import React from 'react';
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';
import { CardContainer } from '../cardContainer/cardContainer';
import { CardContent } from '../cardContent/cardContent';
import './style.css';

type ListPops = {
    parentId: string;
};

export const ListCards = (props: ListPops): JSX.Element => {
    const { parentId } = props;

    const subCards = useSelector((state: RootState) => state.cards.subcards);

    const cardsToShow = subCards[parentId];
    if (!cardsToShow) return <h2>no any cards yet</h2>;
    if (cardsToShow.length === 0) return <h2>no any cards yet</h2>;
    return (
        <ul>
            {cardsToShow.map((card) => {
                return (
                    <CardContainer key={card.id} {...card} parentId={parentId}>
                        <CardContent />
                    </CardContainer>
                );
            })}
        </ul>
    );
};
