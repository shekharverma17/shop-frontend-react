// function FormikExample() {
//     function validateName(value) {
//       let error
//       if (!value) {
//         error = 'Name is required'
//       } else if (value.toLowerCase() !== 'naruto') {
//         error = "Jeez! You're not a fan 😱"
//       }
//       return error
//     }
  
//     return (

//     )
//   }

import React, { useState, useEffect } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    FormErrorIcon,
    Field,
  } from "@chakra-ui/form-control"
const Form = () => {
//   const validateName =(value) => {
//     let error
//     if (!value) {
//       error = 'Name is required'
//     } else if (value.toLowerCase() !== 'naruto') {
//       error = "Jeez! You're not a fan 😱"
//     }
//     return error
//   }
const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''
  
  return (
    <Form>
    <Field name='name' validate={validateName}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors.name && form.touched.name}>
          <FormLabel>First name</FormLabel>
          <Input {...field} placeholder='name' />
          <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
    <Button
      mt={4}
      colorScheme='teal'
      isLoading={props.isSubmitting}
      type='submit'
    >
      Submit
    </Button>
  </Form>
  )
}
export default Form;
