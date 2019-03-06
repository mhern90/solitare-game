import React, { Component } from "react";
import styled from "styled-components";
import Deck from "./Deck";
import Stacks from "./Stacks";
import Button from "../../shared/Button";
import Piles from "./Piles";

const StyledGameBoard = styled.div`
    min-height: 100vh;
    display: block;
    width: 100%;
    background: ${props => props.theme.green}
    position: relative

    .deck-and-stacks {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        padding-bottom: 30px;
    }

    .piles {
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
        const { hand, drawThree, stacks, piles } = this.props;
        return (
            <StyledGameBoard>
                <div className="deck-and-stacks">
                    <Deck hand={hand} drawThree={drawThree} />
                    <Stacks stacks={stacks} />
                </div>
                <div className="piles">
                    <Piles piles={piles} />
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
