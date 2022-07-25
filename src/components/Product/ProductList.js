import { Flex, Grid } from "@chakra-ui/react";
import Product from "./product";
import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://af3dyix2oc.execute-api.us-east-1.amazonaws.com/dev/products"
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  return (
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
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </Grid>
    </Flex>
  );
};
export default ProductList;
