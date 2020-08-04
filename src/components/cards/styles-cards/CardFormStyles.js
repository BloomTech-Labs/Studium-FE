import styled from 'styled-components'

export const InputWrapper = styled.div`
   display: flex; 
   flex-direction: column; 
   margin: auto; 
   text-align: left;
   width: 100%;
`

export const TextArea = styled.textarea`
   width: 335px;
   height: 187px;
   background: #FFFFFF;
   border: 1px solid #C4C4C4;
   border-radius: 6px;
   box-sizing: border-box;
   padding: 20px;
`

export const AutoGen = styled.label`
   font-family: Source Sans Pro;
   font-style: normal;
   font-weight: normal;
   font-size: 18px;
   line-height: 23px;
   width: 850%;
   vertical-align: middle;
   padding-top: 10px;
`

export const Heading = styled.div`
   text-align: left;
   mergin-top: 25px;
   font-family: Source Sans Pro;
   font-style: normal;
   font-weight: bold;
   font-size: 17px;
   line-height: 21px;
   width: 100%;
`

export const AddCardFoot = styled.div`
   height: 80px;
   display: flex;
   background: #FFFFFF;
   border-top: 1.07966px solid #C4C4C4;
   width: 100%;
`

export const EditDeckFoot = styled.div`
   height: 80px;
   display: flex;
   justify-content: space-between
   background: #FFFFFF;
   border-top: 1.07966px solid #C4C4C4;
`

export const NextButton = styled.button`
   width: 150px;
   height: 45.44px;
   margin-top: 16px;
   background: #2E71FD;
   border-radius: 6px;
   font-family: Source Sans Pro;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 18px;
   color: #FFFFFF;
   border: none;
`

export const DeleteButton = styled.button`
   width: 150px;
   height: 45.44px;
   margin-top: 16px;
   background: red;
   border-radius: 6px;
   font-family: Source Sans Pro;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 18px;
   color: #FFFFFF;
   border: none;
`

export const AddCardBtn = styled.button`
   width: 150px;
   height: 45.44px;
   margin-top: 16px;
   background: #FFFFFF;
   border-radius: 6px;
   border: 1px solid #2E71FD;
   font-family: Source Sans Pro;
   font-style: normal;
   font-weight: bold;
   font-size: 22px;
   line-height: 18px;
   color: #2E71FD;
`

export const ErrorMessage = styled.p`
   color: red;
`

export const TitleDisplay = styled.input`
   height: 44px;
   background: #FFFFFF;
   border: 1px solid #C4C4C4;
   border-radius: 6px;
   box-sizing: border-box;
   font-family: Source Sans Pro;
   font-style: normal;
   font-weight: normal;
   font-size: 18px;
   line-height: 23px;
   width: 100%;
   
`