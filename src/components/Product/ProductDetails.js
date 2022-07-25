import { Flex, Grid } from "@chakra-ui/react";
import Product from "./product";
import React, { useState, useEffect } from "react";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(
      "https://r8ygrvvgzj.execute-api.us-east-1.amazonaws.com/dev/products/1"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProduct(data);
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
