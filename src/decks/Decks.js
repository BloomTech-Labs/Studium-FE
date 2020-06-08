import React from 'react';
import {connect} from 'react-redux';


//just some possible code

class Decks extends Component {
    componentDidMount () {
      const { decks, dispatch } = this.props
      dispatch(handleInitialData())
    }
  
    clear = () => {
      this.props.dispatch(clearCustomDecks())
      clearDecks()
      this.props.dispatch(handleInitialData())
    }
  
    render () {
  
  
      return (
          <h1>This is a deck</h1>
      )
  
  function mapStateToProps ({ decks }) {
    return {
      decks,
      isInitialData: decks && Object.keys(decks).length === 2,
    }
}
}}
    export default Decks;