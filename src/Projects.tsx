import { Box,  Text, VStack } from "@chakra-ui/react";
// import { AccordionRoot } from "@chakra-ui/react/a";

function Projects() {
  return (
    <Box scrollMarginTop={'var(--header-height)'} id={'projectsSection'} paddingY={12}>
      <VStack width={'100%'}>
        <Text fontSize={'2xl'}>{'Projects'}</Text>
        <Text>{'Forum web app'}</Text>
        {/* <Accordion>
          
        </Accordion> */}
      </VStack>
    </Box>
  );
}

export default Projects;