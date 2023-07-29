// import './App.css';
import { Grid, Box } from "@chakra-ui/react"
import Home from "./sections/home";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Raleway',
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        h="100vh"
        templateRows="repeat(4, 1fr)"
        templateAreas={`
          "home"
          "about"
          "projects"
          "contact"
        `}
      >
        <Home gridArea="home"/>
        <Box gridArea="about" bg="purple.500" h="1000px"/>
        <Box gridArea="projects" bg="red.500" h="1000px"/>
        <Box gridArea="contact" bg="orange.500" h="1000px"/>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
