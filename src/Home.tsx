import { Button,  Container, StackDivider, Text, VStack } from '@chakra-ui/react';

function Home() {
  return (
    <Container centerContent height={'2000px'}>
      <VStack spacing={4} divider={<StackDivider/>}>
        <Text>{'Hello there this a some text in a Container'}</Text>
        <Button variant={'solid'}>
          {'Button'}
        </Button>
      </VStack>
    </Container>
  );
}

export default Home;
