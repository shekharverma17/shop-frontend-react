import { Text, Image, Box, Stack, Heading } from "@chakra-ui/react";

const Product = ({ category, image, title, rating, price }) => (
  <Stack p={{ base: "0 2rem" }}>
    <Text as="u">{category}</Text>
    <br />
    {/* <Image objectFit="cover" src={image} alt={"imageAlt"} /> */}
    <Box boxSize="150px">
      <Image src={image} alt="Dan Abramov" />
    </Box>
    <br />
    <Heading color="teal.300" size="md" textTransform="capitalize">
      {title}
    </Heading>
    <Box>
      Price: {price}
      <Box as="span" color="gray.600" fontSize="sm">
        / unit
      </Box>
    </Box>
    <Box>Rating: {rating.rate}</Box>
  </Stack>
);

export default Product;
