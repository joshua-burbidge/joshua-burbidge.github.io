import './App.css';
import { Button, ChakraProvider, Container, StackDivider, Text, VStack } from '@chakra-ui/react';

function App() {

  return (
    <ChakraProvider>
      <Container centerContent>
        <VStack spacing={4} divider={<StackDivider/>}>
          <Text>{'Hello there this a some text in a Container'}</Text>
          <Button variant={'solid'}>
            {'Button'}
          </Button>
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
