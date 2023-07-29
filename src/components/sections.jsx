import { Box, Button, Flex, Spacer } from "@chakra-ui/react";

function Sections () {
    return (
        <Box gridArea="sections" bg="transparent" pr="5">
            <Flex
                h="100%"
                pl="5"
                pr="5"
                align="center"
            >
                    <Button bg="transparent" fontWeight='400'>ABOUT</Button>
                    <Spacer/>
                    <Button bg="transparent" fontWeight='400'>PROJECTS</Button>
                    <Spacer/>
                    <Button bg="transparent" fontWeight='400'>CONTACT</Button>
                    <Spacer/>
                    <Button bg="transparent" borderRadius="0" border="1px solid black" fontWeight='400'>RESUME</Button>
            </Flex>
        </Box>
    )
}

export default Sections