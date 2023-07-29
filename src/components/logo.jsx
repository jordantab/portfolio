import { Box, Flex, Center } from "@chakra-ui/react";

function Logo () {
    return (
        <Box gridArea="logo">
            <Flex
                h="100%"
                p="10"
            >
                <Center 
                    w="25%"
                    fontSize="64px"
                    bg="#C7E0F9"
                >
                    JT
                </Center>
                <Center
                    w="70%"
                    fontSize="36px"
                >
                    JORDAN TAB
                </Center>
            </Flex>
        </Box>
    )
}

export default Logo