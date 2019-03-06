import {
    NEW_DECK,
    NEW_DECK_ERROR,
    DRAW_THREE,
    RESTORE_GAME,
    TOGGLE_FLIPPED
} from "../constants";

export const getNewDeck = () => {
    return dispatch => {
        fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .then(res => {
                return res.json();
            })
            .then(data => {
                if (data.success) {
                    const id = data.deck_id;

                    return fetch(
                        "https://deckofcardsapi.com/api/deck/" +
                            id +
                            "/draw/?count=52"
                    );
                }
            })
            .then(res => {
                return res.json();
            })
            .then(data => {
                dispatch({
                    type: NEW_DECK,
                    deck: {
                        cards: data.cards,
                        id: data.deck_id,
                        remaining: data.remaining
                    }
                });
            })
            .catch(err => {
                dispatch({
                    type: NEW_DECK_ERROR
                });
            });
    };
};

export const restoreGame = config => ({
    type: RESTORE_GAME,
    config
});

export const drawThree = () => ({
    type: DRAW_THREE
});

export const toggleFlippedStatus = id => ({
    type: TOGGLE_FLIPPED
});
