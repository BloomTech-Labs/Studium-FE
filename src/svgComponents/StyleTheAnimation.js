import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {AnimatedSynaps} from "./index.js";
import {Form, Input} from "antd";
import {ContainerDiv} from "../components";

/**
 *   StyleTheAnimation
 *
 *  @component
 *
 */
const StyleTheAnimation = (props) => {
  const [state, setState] = useState({});
  const {getInput} = useForm(state, setState);
  
  return (
    <Container>
      <ContainerDiv left={0} position={"absolute"} top={0} width="120px">
        {getInput("Background Color")}
      </ContainerDiv>
      <AnimatedSynaps/>
    </Container>
  );
};

const Container = styled.div`
`;

const useForm = (state, setState) => {
    
    const getName = (label) => {
      const nameArray = label.split(" ");
      let name = null;
      nameArray.forEach(word => {
        if(name === null){
          name += word.toLowerCase();
        }else{
          name += word.charAt(0).toUpperCase() + word.slice(1);
        }
      });
      return name;
    };
    
    const getInput = (label, defaultValue) => {
      const name = getName(label);
      setState({[name]: defaultValue});
      return (
        <Form.Item label={label}>
          <Input name={name} value={state[name]}
                 onChange={(e) => setState({[e.target.name]: e.target.value})}/>
        </Form.Item>
      );
    };
    
    return {getInput};
  }
;

StyleTheAnimation.propTypes = {};

export default StyleTheAnimation;