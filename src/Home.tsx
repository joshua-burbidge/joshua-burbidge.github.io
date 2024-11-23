import { Container, StackSeparator, VStack } from '@chakra-ui/react';
import Profile from './Profile';
import Projects from './projects/Projects';
import { useEffect, useState } from 'react';

function Home() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "profile") {
              setBackgroundColor("blue.50");
            } else if (entry.target.id === "projects") {
              setBackgroundColor("#ffe4e1");
            }
          }
        });
      },
      { threshold: 0.5 } 
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
    <Container 
      centerContent 
      minHeight={'2000px'} 
      maxWidth={'container.md'} 
      backgroundColor={backgroundColor}
      transition={"background-color 0.5s ease-in-out"}
    >
      <VStack gap={8} separator={<StackSeparator/>} width={'100%'}>
        <Profile/>
        <Projects/>
      </VStack>
    </Container>
  );
}

export default Home;
