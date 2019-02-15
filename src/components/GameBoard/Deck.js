import React, { Component } from "react";
import styled from "styled-components";
import Card from "../../shared/Card";

const StyledDeck = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;

    #drawPile {
        float: left;
        padding-right: 15px;
    }
    #hand {
        float: left;
        position: relative;
    }
`;

const Deck = ({ hand, drawThree }) => {
    return (
        <StyledDeck>
            <div id="drawPile">
                <Card
                    isFlipped={true}
                    value="none"
                    suite="none"
                    code="none"
                    handleClick={drawThree}
                />
            </div>
            <div id="hand">
                {hand.length > 0 &&
                    hand.map((card, i) => (
                        <Card
                            stacked={true}
                            zIndex={i * 10}
                            pl={i * 15}
                            isFlipped={false}
                            value={card.value}
                            suite={card.suite}
                            code={card.code}
                            image={card.image}
                        />
                    ))}
            </div>
        </StyledDeck>
    );
};

export default Deck;
