import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardSide from '../components/CardSide';


const CardWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  perspective: 1500px;
  transform-style: preserve-3d;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  margin-bottom: 1rem;
`

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardFlipped: false,
    }
  }

  toggleIsCardFlipped () {
    this.setState({
      isCardFlipped: !this.state.isCardFlipped,
    })
  }

  findAndSetCardFlipper(childComponent, flipperRefName) {
    
    if (childComponent.ref === flipperRefName) {
      return React.cloneElement(childComponent, {
        onClick: this.toggleIsCardFlipped.bind(this)
      });
    }
   
    else if (React.Children.count(childComponent) > 0 && React.isValidElement(childComponent)) { 
      return React.cloneElement(childComponent, {
        children: React.Children.map(
          childComponent.props.children, 
          grandchild =>
            this.findAndSetCardFlipper(grandchild, flipperRefName)
        ),
      });
    }
    
    return childComponent;
  }

  render() {  
    const children = React.Children.map(
      this.props.children, 
      child => this.findAndSetCardFlipper(child, this.props.flipperID || 'flipper')
    );

    return (
      <CardWrapper>
        
        <CardSide
          cardRotation={this.state.isCardFlipped ? '180deg' : '0deg'}
          backgroundColor={this.props.frontBackgroundColor || '#1097FF'}
          containerStyle={this.props.frontContainerStyle || { }}
          contentStyle={this.props.frontContentStyle || { }}
        >
          {children[0]}
        </CardSide>
        <CardSide
          cardRotation={this.state.isCardFlipped ? '0deg' : '-180deg' }
          backgroundColor={this.props.backBackgroundColor || '##FF851B'}
          containerStyle={this.props.backContainerStyle || { }}
          contentStyle={this.props.backContentStyle || { }}
        >
          {children[1]}
        </CardSide>
      </CardWrapper>
    );
  }
}

Card.propTypes = {
  flipperID: PropTypes.string,
  children: (props, propName) => {
    if (React.Children.count(props[propName]) !== 2) {
      return new Error(
        `Each Card  must have exactly two children at its top level; one for each
         side of the card (e.g., <Card><div>FRONT</div><div>BACK</div></Card>`
      );
    }
  },
  frontBackgroundColor: PropTypes.string,
  frontContainerStyle: PropTypes.object,
  frontContentStyle: PropTypes.object,
  backBackgroundColor: PropTypes.string,
  backContainerStyle: PropTypes.object,
  backContentStyle: PropTypes.object,
}

export default Card; 