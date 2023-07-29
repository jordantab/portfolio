import { Grid, Box, Center, Image, Flex, Text, Button} from "@chakra-ui/react";
import Logo from "../components/logo";
import Sections from "../components/sections";


function Home () {
    return (
        <Box
            position="relative"
            h="100vh"
            _before={{
            content: '""',
            position: "absolute",
            top: "0",
            bottom: "20",
            right: "0",
            left: "0",
            backgroundImage: "linear-gradient(105deg, white 45%, #C7E0F9 45%)",
            zIndex: "-1",
            }}
        >
            <Grid
                h="100vh"
                templateColumns="1fr 0.3fr 1.3fr"
                templateRows="1fr 4fr 1fr"
                templateAreas={`
                    "logo . sections"
                    "title . photo"
                `}
            >
                <Logo/>
                <Sections/>
                <Flex gridArea="title" bg="trasparent" justifyContent="center" align="center">
                    <Flex direction="column" fontSize="32px" align="center" justifyContent="center" gap="5">
                        <Text >Full-Stack Software Engineer</Text>
                        <Flex w="100%" justifyContent="space-around">
                            <Button fontWeight='400' bg="transparent" borderRadius="0" border="1px solid black">LEARN MORE</Button>
                            <Button fontWeight='400' bg="#C7E0F9" borderRadius="0" border="1px solid black">GET IN TOUCH</Button>
                        </Flex>
                    </Flex>
                </Flex>
                <Box
                    gridArea="photo"
                    bg="trasparent"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                        <Image
                            src={`${process.env.PUBLIC_URL}/headshot.png`}
                            width="60%"
                            // mr="100"
                            mb="0"
                        />
                </Box>
            </Grid>
        </Box>
    )
}

export default Home