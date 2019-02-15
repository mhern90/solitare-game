import React, { Component } from "react";
import styled from "styled-components";
import Deck from "./Deck";
import Button from "../../shared/Button";

const StyledGameBoard = styled.div`
    min-height: 100vh;
    display: block;
    width: 100%;
    background: ${props => props.theme.green}
    position: relative

    .deck-and-stacks {
        width: 100%;
        position: relative;
    }

    > h1 {
        position: absolute;
        margin: auto;
        bottom: 0;
        left: 0;
        right: 0;
        color: white;
        text-align: center;
    }
`;

const Controls = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

class GameBoard extends Component {
    render() {
        const { hand, drawThree } = this.props;
        return (
            <StyledGameBoard>
                <div className="deck-and-stacks">
                    <Deck hand={hand} drawThree={drawThree} />
                </div>
                <Controls>
                    <Button handleClick={this.startNewGame} text="+ New Game" />
                </Controls>
                <h1>Solitaire</h1>
            </StyledGameBoard>
        );
    }
}
export default GameBoard;
