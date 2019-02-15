// import { combineReducers } from "redux";
// export default combineReducers({});
import {
    NEW_DECK,
    NEW_DECK_ERROR,
    DRAW_THREE,
    RESTORE_GAME
} from "../constants";

export default function(state = {}, action) {
    if (action.type === NEW_DECK) {
        const newState = makeDeck(action.deck);
        localStorage.setItem("savedGame", JSON.stringify(newState));
        return newState;
    }

    if (action.type === RESTORE_GAME) {
        return action.config;
    }

    if (action.type === NEW_DECK_ERROR) {
        return Object.assign({}, state, { error: action.deck });
    }

    if (action.type === DRAW_THREE) {
        let { cards } = state.deck,
            newHand = [];
        const oldHand = state.hand;

        if (cards.length > 2) {
            newHand = cards.slice(0, 3);
            cards.splice(0, 3);
        } else if (cards.length > 1) {
            newHand = cards.slice(0, 2);
            cards.splice(0, 2);
        } else {
            newHand = cards;
            cards.splice(0, 1);
        }

        // push the old hand back to the bottom of the deck
        if (oldHand.length > 0) {
            cards = [...cards, ...oldHand];
        }

        const newState = {
            ...state,
            deck: { ...state.deck, cards },
            hand: newHand
        };

        localStorage.setItem("savedGame", JSON.stringify(newState));

        return newState;
    }

    return state;
}

const makeDeck = deck => {
    let initialState = {
        deck,
        hand: [],
        piles: [],
        stacks: {
            diamonds: [],
            hearts: [],
            aces: [],
            spades: []
        }
    };
    let pileCards = deck.cards.slice(0, 28);

    initialState.deck.cards.splice(0, 28);
    initialState.piles = initializePiles(pileCards);

    return initialState;
};

const initializePiles = cards => {
    let remaining = [...cards];
    let piles = [];

    for (let i = 0; i < 7; i++) {
        const end = i + 1;
        let pile = [...remaining.slice(0, end)];
        remaining.splice(0, end);
        piles.push({ id: i, cards: pile });
    }

    return piles;
};
