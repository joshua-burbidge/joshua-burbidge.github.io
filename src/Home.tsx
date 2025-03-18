import { Box, Container, Separator, VStack } from '@chakra-ui/react';
import Profile from './Profile';
import Projects from './projects/Projects';
import { useEffect, useState } from 'react';

function Home() {
  const [backgroundColor, setBackgroundColor] = useState("blue.50");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "profile") {
              setBackgroundColor("blue.50");
            } else if (entry.target.id === "projects") {
              setBackgroundColor("green.200");
            }
          }
        });
      },
      { threshold: 0.3 } 
      // Trigger when 50% of the section is visible
      // If using < 50% it can get stuck in between
    );

    const profileElement = document.getElementById("profile");
    const projectsElement = document.getElementById("projects");

    if (profileElement) observer.observe(profileElement);
    if (projectsElement) observer.observe(projectsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      backgroundColor={backgroundColor}
      transition={"background-color 1s ease-in-out"}
    >
      <Container 
        centerContent 
        minHeight={'2000px'} 
        maxWidth={'container.md'} 
      >
        <VStack gap={8} separator={<Separator size={'lg'}borderColor={'black'}/>} width={'100%'}>
          <Profile/>
          <Projects/>
        </VStack>
      </Container>
    </Box>
  );
}

export default Home;
