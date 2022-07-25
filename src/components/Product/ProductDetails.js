import { Flex, Grid } from "@chakra-ui/react";
import Product from "./product";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams()
  useEffect(() => {
    fetch(
      `https://af3dyix2oc.execute-api.us-east-1.amazonaws.com/dev/products/${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setProduct(data[0]);
      });
  }, []);
  console.log(product)

  return (
   <>
    <Flex
      direction="column"
      justifyContent="center"
      maxW={{ xl: "1200px" }}
      m="0 auto"
      minH="100vh"
    >
      <Grid
        w="full"
        gridGap="5"
        gridTemplateColumns="repeat( auto-fit, minmax(300px, 1fr) )"
      >
          <Product key={product.id} {...product} />
      </Grid>
    </Flex> 
    </>
  );
};
export default ProductDetails;
