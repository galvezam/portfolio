import Card from "../Card";
import React from "react";
import FullScreenSection from "../FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";

const bioDescription = [
    {
      title: "Undergrad at Vanderbilt",
      description:
        "Class of 2027, Majoring in CS and Math, possible Masters in Math",
      getImageSrc: () => require("../bioImages/vandy2.jpeg"),
    },
    {
      title: "Vandy Club Soccer",
      description:
        "Part of Vandy Men's Club soccer",
      getImageSrc: () => require("../bioImages/cbhs_soocer.JPG"),
    },
    {
      title: "Gym",
      description:
        "Attend gym regularly",
      getImageSrc: () => require("../bioImages/gym.png"),
    },
    {
      title: "Avid reader",
      description:
        "Like to read history books and semi-modern philosophy",
      getImageSrc: () => require("../bioImages/staugustine.jpeg"),
    },
  ];


  const BioSection = () => {
    return (
      <FullScreenSection
        // dark green color: backgroundColor="#14532d"
        // cyan color: "#008080"
        // darker cyan: "#145b5f"
        // backgroundColor="#145b5f"
        backgroundColor = "#2A4365"
        isDarkBackground
        p={8}
        alignItems="flex-start"
        spacing={8}
      >
        <Heading as="h1" id="bio-section">
          My Bio
        </Heading>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2,minmax(0,1fr))"
          gridGap={12}
        >
          {bioDescription.map((bio) => (
            <Card
              key={bio.title}
              title={bio.title}
              description={bio.description}
              imageSrc={bio.getImageSrc()}
              link="https://www.github.com/galvezam"
            />
          ))}
        </Box>
      </FullScreenSection>
    );
  };
  
  export default BioSection;
  