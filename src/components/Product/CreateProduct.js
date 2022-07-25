import React, { useState, useEffect } from "react";
//import Form from './Form'
import HookForm from './HookForm'
import { ChakraProvider, Box } from '@chakra-ui/react'

const CreateProduct = () => {
  return (
    <ChakraProvider>
    <Box p={4}>
      <HookForm />
    </Box>
  </ChakraProvider>
  );
};
export default CreateProduct;
