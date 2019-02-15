import React, { Component } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    cursor: pointer;
    font-size: 16px;
    padding: 10px 15px;
    background: ${props => props.bgcolor};
    color: ${props => props.color};
    border-radius: 5px;
`;

class Button extends Component {
    render() {
        const { text, handleClick } = this.props;
        return (
            <StyledButton onClick={e => handleClick(e)}>{text}</StyledButton>
        );
    }
}

export default Button;
