import React, { Component } from "react";
import styled from "styled-components";
import card_back_red from "../images/card_back_red.png";

const PlayingCard = styled.div`
    position: ${props => (props.stacked ? "absolute" : "inherit")};
    top: ${props => props.top + "px"}
    cursor: pointer;
    width: 120px;
    height: 160px;
    float: left;
    padding-left: ${props => props.pl + "px"}
    z-index: ${props => props.zIndex};

    img {
        width: 120px;
        height: 160px;
        border-radius: 5px;
    }

    @media (max-width: 800px;) {
        width: 60px;
        height: 80px;

        img {
            width: 60px;
            height: 80px;
        }
    }
`;

class Card extends Component {
    render() {
        const {
            image,
            value,
            suite,
            code,
            isFlipped,
            handleClick,
            pl,
            top,
            zIndex,
            stacked
        } = this.props;
        console.log(pl);
        return (
            <PlayingCard
                pl={pl}
                top={top}
                stacked={stacked}
                zIndex={zIndex}
                className="playing-card"
                data-value={value}
                data-suite={suite}
                data-code={code}
                onClick={e => handleClick(e)}
            >
                <img src={isFlipped ? card_back_red : image} alt={value} />
            </PlayingCard>
        );
    }
}

export default Card;
