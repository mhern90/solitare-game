import React, { Component } from "react";
import styled from "styled-components";
import Card from "../../shared/Card";

const StyledDeck = styled.div`
    float: left;
    padding: 10px 0 0 10px;

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
                            key={card.code}
                            stacked={true}
                            zIndex={i * 10}
                            pl={i * 15}
                            isFlipped={card.isFlipped}
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
