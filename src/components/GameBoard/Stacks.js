import React, { Component } from "react";
import styled from "styled-components";
import Card from "../../shared/Card";

const StackContainer = styled.div`
    float: right;
`;

const StyledStack = styled.div`
    width: 120px;
    height: 160px;
    border-radius: 5px;
    border: 2px solid #eee;
    float: left;
    margin: 10px 15px;

    @media (max-width: 800px;) {
        width: 60px;
        height: 80px;
    }

    p {
        text-align: center;
        color: white;
    }
`;

class Stacks extends Component {
    render() {
        const stacks = this.props.stacks;
        return (
            <StackContainer>
                {Object.keys(stacks).map(suit => {
                    let stack = stacks[suit];
                    return (
                        <StyledStack key={suit}>
                            {stack.length > 0 &&
                                stack.map((card, i) => (
                                    <Card
                                        key={card.code}
                                        stacked={true}
                                        zIndex={i * 10}
                                        isFlipped={false}
                                        value={card.value}
                                        suite={card.suite}
                                        code={card.code}
                                        image={card.image}
                                    />
                                ))}
                            <p>{suit}</p>
                        </StyledStack>
                    );
                })}
            </StackContainer>
        );
    }
}

export default Stacks;
