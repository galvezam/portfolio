import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, Icon } from "@chakra-ui/react";
import Resume from "../resume/resume_(may_2024).pdf";

const socials = [
  {
    icon: faEnvelope,
    url: "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlKpGkRRGwgJCPjdsCTGWbjchXSvPPlTskhSCTftKcTZGZjnqKCJzZSmJsWbqcPLjFmxdq",
  },
  {
    icon: faGithub,
    url: "https://github.com/galvezam",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/matthew-galvez-9399012a6/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
        block: "start",
      });
      

    }
  };

  return (
    <Box
      position="fixed"

      top={isVisible ? 0 : -100}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="top"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1000} // Ensure the header stays on top
      
      
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((social, index) => (
              <Link key={index} href={social.url} isExternal
              _hover={{ boxShadow: "xl", transform: "scale(1.25)", transition: "0.1s" }}>
                <Icon as={FontAwesomeIcon} icon={social.icon} boxSize={6} />
              </Link>
            ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              
              <Link onClick={handleClick("projects")}>
                <p>My Projects</p>
              </Link>   
              <Link onClick={handleClick("contactme")}>
                <p>Contact Me</p>
              </Link>    
              <Link href={Resume} target="_blank">
                <p>Resume</p>
              </Link>    
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
