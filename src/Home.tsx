import { Container, StackSeparator, VStack } from '@chakra-ui/react';
import Profile from './Profile';
import Projects from './projects/Projects';

function Home() {
  return (
    <Container centerContent height={'2000px'} maxWidth={'container.md'}>
      <VStack gap={8} separator={<StackSeparator/>} width={'100%'}>
        <Profile/>
        <Projects/>
      </VStack>
    </Container>
  );
}

export default Home;
