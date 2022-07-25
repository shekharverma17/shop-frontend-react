import { Text, Image, Box, Stack, Heading, SimpleGrid } from "@chakra-ui/react";

const Product = ({ category, image, title, rating, price }) => (
  <SimpleGrid>
    <Text as="u">{category}</Text>
    <br />
    {/* <Image objectFit="cover" src={image} alt={"imageAlt"} /> */}
    <Box>
      <Image  boxSize='150px' src={image} alt="Dan Abramov" />
    </Box>
    <br />
    <Box>
    <Heading color="teal.300" size="md" textTransform="capitalize">
      {title}
    </Heading>
    </Box>
    <Box>
      Price: {price}
      <Box as="span" color="gray.600" fontSize="sm">
        / unit
      </Box>
    </Box>
    <Box>Rating: {rating && rating.rate}</Box>
  </SimpleGrid>
);

export default Product;
