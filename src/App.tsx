import React, { useCallback, useEffect } from 'react';
import { ListCards } from './components/listCards/listCards';
import { useDispatch } from 'react-redux';
import { setInitialData } from './app/features/cards/cardsSlice';

import { getData } from './data.js';
import './App.css';

function App(): JSX.Element {
    const dispatch = useDispatch();

    const setData = useCallback(() => {
        const result = getData();

        dispatch(setInitialData(result));
    }, [getData, dispatch]);

    useEffect(() => {
        setData();
    }, [setData]);

    return (
        <div className="App">
            <header className="App-header"></header>
            <main className="container">
                <ListCards parentId={'main'} />
            </main>
        </div>
    );
}

export default App;
