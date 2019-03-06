import React, { Component } from "react";
import styled from "styled-components";
import Card from "../../shared/Card";

const StyledPileContainer = styled.div``;

const StyledPile = styled.div`
    width: 120px;
    height: 160px;
    float: left;
    margin: 10px 15px;

    @media (max-width: 800px;) {
        width: 60px;
        height: 80px;
    }
`;

const Piles = ({ piles }) => {
    return (
        <StyledPileContainer>
            {Object.keys(piles).map(number => {
                let pile = piles[number];
                return (
                    <StyledPile key={number}>
                        {typeof pile.cards != "undefined" &&
                            pile.cards.map((card, i) => (
                                <Card
                                    key={card.code}
                                    stacked={true}
                                    zIndex={i * 10}
                                    top={i * 20}
                                    pl={0}
                                    isFlipped={card.isFlipped}
                                    value={card.value}
                                    suite={card.suite}
                                    code={card.code}
                                    image={card.image}
                                />
                            ))}
                    </StyledPile>
                );
            })}
        </StyledPileContainer>
    );
};

export default Piles;
