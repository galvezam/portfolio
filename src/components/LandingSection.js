import React from "react";
import { Avatar, Heading, VStack, Link as ChakraLink} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import Profile from "../images/matthew_profile.jpeg";
import Bio from "./Bio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Link as RouterLink} from "react-router-dom";

const greeting = "Hello, I am Matthew!";
const bio1 = "a Vanderbilt student";
const bio2 = "specialised in CS and Math";
const visitBio = "visit my bio!";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    // dark blue: backgroundColor="#2A4365"
    backgroundColor="#2A4365"
  >
    <VStack spacing={4} align="center">
      <RouterLink to="/bio">
        <Avatar 
          src={Profile} 
          size="2xl" 
          name="Me" 
        
          _hover={{ boxShadow: "xl", transform: "scale(1.05)", transition: "0.3s" }}
        />
      </RouterLink>
    
      <Heading as="h1" size="md">
        {greeting}
      </Heading>
      <Heading as="h2" size="2xl">
        {bio1}
      </Heading>
      <Heading as="h2" size="2xl">
        {bio2}
      </Heading>

      <RouterLink to="/bio">
        <ChakraLink>
          <Heading as="h3" size="md">
            {visitBio}
          </Heading>
        </ChakraLink>
      </RouterLink>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
