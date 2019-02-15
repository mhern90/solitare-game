import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from "../reducers";
import initialState from "./initial-state";

import { getNewDeck, restoreGame } from "../actions/actions";

const middleware = [thunk];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

const savedGame = JSON.parse(localStorage.getItem("savedGame"));

if (savedGame != null) {
    // Set the State of the game back to saved
    store.dispatch(restoreGame(savedGame));
} else {
    store.dispatch(getNewDeck());
}

export default store;
