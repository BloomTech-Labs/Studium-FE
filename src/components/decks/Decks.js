import React, { useState, useEffect } from 'react'
import { Labels, DeckTitle, CardCount, Deck } from '../dashboard/dashboardStyles.js'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
import { Link } from 'react-router-dom';

const DeckDetails = ({ deck }) => {
    const { deck_name, deck_img } = deck;

    return (
        <Link to={`/decks/${deck.id}`} style={{ textDecoration: 'none' }}>
            <Deck>
                <Labels>
                    <DeckTitle>{deck_name}</DeckTitle>
                    <CardCount>2 cards</CardCount>
                </Labels>
            </Deck>
        </Link>

    );
}

export default DeckDetails;