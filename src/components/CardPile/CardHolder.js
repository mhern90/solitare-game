import React, { Component } from 'react';
import card_back_red from '../../images/card_back_red.png'

const CardHolderSlot = styled.div`
    width: 50px;
    height: 80px;
    border-radius: 5px;
    border: 2px solid white;
`

class CardHolder extends Component {

    render() {
        return (
            <CardHolderSlot  />
        )
    }
}

export default CardHolder;