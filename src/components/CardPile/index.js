import styled from 'styled-components';
import CardHolder from './CardHolder';
import React, {Component} from 'react';
import CardHolder from './CardHolder';

const CardPileStyled = styled.div`
    min-height: vh100;
`;

class CardPile extends Component {
    render() {
        return(
            <CardPileStyled>
                <CardHolder />
            </CardPileStyled>
        )
    }
}

export default CardPile;