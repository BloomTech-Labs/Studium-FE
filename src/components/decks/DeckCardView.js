import React from 'react';


const DeckCardView = ({ card }) => {

    console.log("cards in deckcardview", card)

    const { card_front, card_back } = card

    return (
        <>
            <h2>{card_front}</h2>
            <h3>{card_back}</h3>
        </>
    )
}

export default DeckCardView