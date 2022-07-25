import { Text, Image, Box, Stack, Heading, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom"
const Product = ({ id, title, description, count, price }) => (
  <SimpleGrid _hover={{ bg: "red.500", color: "white" }}>
       <Link to={`/products/${id}`}>
    {/* <Text as="u">{category}</Text> */}
    <br />
    {/* <Image objectFit="cover" src={image} alt={"imageAlt"} /> */}
    {/* <Box>
      <Image  boxSize='150px' src={image} alt="Dan Abramov" />
    </Box> */}
    <br />
    <Box>
    <Heading color="teal.300" size="md" textTransform="capitalize">
      {title}
    </Heading>
    <Text>{description}</Text>
    </Box>
    <Box>
      Price: {price}
      <Box as="span" color="gray.600" fontSize="sm">
        / unit
      </Box>
    </Box>
    <Box>Stocks: {count}</Box>
    </Link>
  </SimpleGrid>
);

export default Product;
