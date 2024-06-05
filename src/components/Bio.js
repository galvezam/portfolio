import BioSection from "./bioComponents/BioSection";
import { ChakraProvider } from "@chakra-ui/react";

import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, VStack, Button, Link as ChakraLink} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Bio() {
    const navigate = useNavigate();
    const goBack = "<< Go Back";

    return (
        
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
                // dark blue: backgroundColor="#2A4365"
            backgroundColor="#2A4365"
        >
        
            <VStack mt={12} w="full" alignItems="flex-start">
                <Button 
                    // colorScheme="teal" 
                    backgroundColor="#2A4365"
                    color = "white"
                    fontSize={20}
                    marginRight={100000}
                    _hover={{ backgroundColor: "white", color: "black" }}
                    onClick={() => navigate('/')}
                >
                    {goBack}
                </Button>
            </VStack>
            <BioSection />

        
            
        </FullScreenSection>
        
    );
}
export default Bio;