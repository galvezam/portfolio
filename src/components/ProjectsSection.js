import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Stock Prediction with Machine Learning",
    description:
      "Sample description",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Database Management with Dario's Painting LLC",
    description:
      "Sample description2",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Crypto Trading with Machine Learning",
    description:
      "Sample description3",
    getImageSrc: () => require("../images/stockprediction2.jpeg"),
  },
  {
    title: "Book Logger",
    description:
      "Log books and essays read in a competitive, but unambitious manner",
    getImageSrc: () => require("../images/books2.jpeg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      // dark green color: backgroundColor="#14532d"
      // cyan color: "#008080"
      // darker cyan: "#145b5f"
      backgroundColor="#145b5f"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={12}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            link="https://www.github.com/galvezam"
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
