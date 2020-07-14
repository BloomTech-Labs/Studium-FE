import styled from 'styled-components'
// import React from 'react'
// import renderer from 'react-test-renderer'
// import 'jest-styled-components'

const Button = styled.button`
  background: #2e71fd;
  color: white;
  border: 1px solid #2e71fd;
  border-radius: 4px;
  padding: 12px;
  margin-left: 6px;
  display: block;
  width: 100px;
  height: 40px;
  cursor: pointer;
  font-family: "Source Sans Pro";

  &:hover{
  color: #2e71fd;
  background: white;
  }
`;

// test('Button works', () => {
//   const tree = renderer.create(<Button />).toJSON()
//   expect(tree).toMatchSnapshot()
//   expect(tree).toHaveStyleRule('color', 'white')
//   expect(tree).toHaveStyleRule('background', '#2e71fd')
// })

// export { Button };
export default Button;
