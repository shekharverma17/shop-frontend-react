import { Flex, Grid } from "@chakra-ui/react";
import Product from "./product";
import { productData } from "../../mocks";
import React, { useState, useEffect } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
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
