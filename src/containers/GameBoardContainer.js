import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import GameBoard from "../components/GameBoard";

import { getNewDeck, drawThree } from "../actions/actions";

const matchStateToProps = ({ deck, hand, piles, stacks }) => ({
    deck,
    hand,
    piles,
    stacks
});

const matchDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            getNewDeck,
            drawThree
        },
        dispatch
    );
};

const GameBoardContainer = connect(
    matchStateToProps,
    matchDispatchToProps
)(GameBoard);

export default GameBoardContainer;
