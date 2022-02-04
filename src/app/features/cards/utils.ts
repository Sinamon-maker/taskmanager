import { CardsObj } from './cardsSlice';

export function deleteById(id: string, arr: Array<CardsObj>): Array<CardsObj> | [] {
    console.log(id, arr);
    return arr.reduce((acc: Array<CardsObj>, rec) => {
        if (rec.id !== id) {
            acc.push(rec);
        }
        return acc;
    }, []);
}

export function upById(id: string, arr: Array<CardsObj>): Array<CardsObj> {
    return arr.reduce((acc: Array<CardsObj>, rec) => {
        if (rec.id === id && acc.length !== 0) {
            const temp = acc.pop();
            acc.push(rec);
            if (temp) {
                acc.push(temp);
            }
        } else {
            acc.push(rec);
        }
        return acc;
    }, []);
}

export function downById(id: string, arr: Array<CardsObj>): Array<CardsObj> {
    if (arr[arr.length - 1].id !== id || arr.length > 1) {
        let counter = 0;
        return arr.reduce((acc: Array<CardsObj>, rec) => {
            if (acc.length >= 1 && acc[acc.length - 1].id === id && counter === 0) {
                const temp = acc.pop();
                acc.push(rec);
                if (temp) {
                    acc.push(temp);
                }
                counter += 1;
            } else {
                acc.push(rec);
            }
            return acc;
        }, []);
    } else return arr;
}
