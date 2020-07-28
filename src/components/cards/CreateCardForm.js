import React from 'react'
import { AvForm, AvField } from 'availity-reactstrap-validation'

const CreateCardForm = () => {
   return (
      <AvForm>
         <AvField name='title' label='Title' required />
         <AvField name='term' label='Term' required />
         <AvField name='answer' label='Answer' required />
      </AvForm>
   )
}

export default CreateCardForm