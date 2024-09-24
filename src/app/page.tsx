import { Box, Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
        <Box borderRadius="lg" bg="red" p={3} mb={6} textAlign="center">
            {"Hello, welcome to my personal website!"}
        </Box>

        <Box display={{md: 'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    {"João Mesquita"}
                </Heading>
                
                <p>{"Computer Engineer / Researcher / Tech Enthusiast"}</p>
            </Box>
        </Box>
    </Container>
  );
}
