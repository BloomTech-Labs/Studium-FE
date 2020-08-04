import styled from "styled-components";

export const MainWrapper = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  /* outline: 1px solid red; */
`;

export const FormGroup = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* outline: 1px solid green; */
  margin: 0 auto;
`;

export const LabelWrapper = styled.div`
  display: block;
`;

export const Input = styled.input`
  border-radius: 3px;
  padding: 1em;
  border: 1px solid #ccc;
  font-size: 1em;
  margin-bottom: 8px;
  width: 157%;
  box-sizing: border-box;
  height: 40px;
`;

export const NamesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
`;

export const H1 = styled.div`
  font-family: Source Sans Pro;
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
  color: #333;
`;

export const H2 = styled.div`
  font-family: Source Sans Pro;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  margin-left: 5px;
  margin-top: 10px;
  color: #333333;
  text-align: left;
`;

export const H3 = styled.div`
  text-align: left;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  padding-bottom: 0.5em;
`;

export const CustomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
