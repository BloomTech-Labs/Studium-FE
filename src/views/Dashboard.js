import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { SmallFlashCard, TitleText, SearchBar } from '../components';
import PropTypes from 'prop-types';
import { devices } from '../utilities/breakpoints-device.js';
import { useAppHooks } from '../customHooks/useAppHooks.js';

const decks = [
  { deck_name: 'Some Name', deck_id: 1 },
  { deck_name: 'Another Name', deck_id: 2 },
  { deck_name: 'Anatomy', deck_id: 3 }, { deck_name: 'Some Name', deck_id: 4 },
  {
    deck_name: 'Another' + ' Name', deck_id: 5,
  }, {
    deck_name: 'Anatomy this is a really long deck name lets just keep' +
      ' this name', deck_id: 6,
  },
];

/**
 * Dashboard
 * @category Views
 * @component
 * @example return (<Dashboard />);
 */

export const Dashboard = props => {
  const [ selected, setSelected ] = useState( 0 );
  const { pathname, changePath } = useAppHooks();
  const search = e => {
    console.log( e.target.value );
  };
  
  const changeDeckSelected = deck => {
    setSelected( deck );
  };
  
  const deckClicked = ( deck = undefined ) => {
    if( !deck ){
      changePath( '/create/deck' );
      return;
    }
    changePath( '/preview', { ...deck } );
  };
  
  return ( <StyledDashboard className={ 'dashboard' }>
    <TitleText text={ 'Dashboard' }/>
    <SearchBar
      onSearch={ search }
      style={ {
        marginTop: '8px',
        marginBottom: '33px',
        width: '80%',
        marginLeft: '10%',
      } }
    />
    <StyledDeckHolder>
      <SmallFlashCard
        border={ 'dashed' }
        icon={ 'plus' }
        onClick={ () => deckClicked() }
      />
      { decks.map( deck => {
        return ( <SmallFlashCard
          key={ deck.deck_id }
          deck={ deck }
          border={ 'solid' }
          onClick={ e => deckClicked( deck ) }
        /> );
      } ) }
    </StyledDeckHolder>
  </StyledDashboard> );
};

Dashboard.propTypes = {
  history: PropTypes.object,
};

const StyledDeckHolder = styled.div`
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-around;
`;

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 100%;

  @media screen and ${ props =>  props.theme.devices.tablet } {
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 400px;
  }
`;

