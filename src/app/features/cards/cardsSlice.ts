import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteById, upById, downById } from './utils';

export type CardsObj = {
    id: string;
    name: string;
    subcards?: boolean;
    parentId?: string;
};

export interface SubCardsState {
    [key: string]: Array<CardsObj>;
}

export interface CardsState {
    cards: Array<CardsObj>;
    subcards: SubCardsState;
}

const initialState: CardsState = {
    cards: [],
    subcards: {},
};

export const cardsReducer = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setInitialData: (state, action: PayloadAction<any>) => {
            state.cards = action.payload.main;
            state.subcards = action.payload;
        },
        onClickAction: (state, action: PayloadAction<any>) => {
            if (action.payload.param === 'remove') {
                state.subcards[action.payload.parentId] = deleteById(
                    action.payload.id,
                    state.subcards[action.payload.parentId],
                );
            }
            if (action.payload.param === 'up') {
                state.subcards[action.payload.parentId] = upById(
                    action.payload.id,
                    state.subcards[action.payload.parentId],
                );
            }
            if (action.payload.param === 'down') {
                state.subcards[action.payload.parentId] = downById(
                    action.payload.id,
                    state.subcards[action.payload.parentId],
                );
            }
        },
        createCard: (state, action: PayloadAction<any>) => {
            const newId = Math.floor(Math.random() * 100).toString();

            const newCard = { id: newId, name: action.payload.valueNew };
            if (action.payload.paramCreate === 'new') {
                state.subcards[action.payload.parentId].push(newCard);
            } else {
                if (state.subcards[action.payload.id]) {
                    state.subcards[action.payload.id].push(newCard);
                } else {
                    state.subcards[action.payload.id] = [newCard];
                }
            }
        },
        changeNameCard: (state, action: PayloadAction<any>) => {
            const newC = state.subcards[action.payload.parentId].map((it) => {
                if (it.id === action.payload.id) {
                    return { ...it, name: action.payload.value };
                } else {
                    return it;
                }
            });
            state.subcards[action.payload.parentId] = newC;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setInitialData, onClickAction, createCard, changeNameCard } = cardsReducer.actions;

export default cardsReducer.reducer;
