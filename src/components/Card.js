import { Heading, HStack, Image, Text, VStack, Box, Link, Icon} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const Card = ({ title, description, imageSrc, link }) => {
  
  return (
    <Link href={link} style={{ textDecoration: "none" }} isExternal>
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
      cursor="pointer"
    >
      
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="200px" />
      <Box p = "2">
      <VStack align="start" p={4} spacing={3}>
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack align="center">
          <Text fontWeight="bold">Learn More</Text>
          <FontAwesomeIcon icon={faArrowRight} />
        </HStack>
      </VStack>
      </Box>
      
    </Box>
    </Link>
   
  );
};

export default Card;
