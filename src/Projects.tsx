import { Box,  Text, VStack } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

function Projects() {
  return (
    <Box scrollMarginTop={'var(--header-height)'} id={'projectsSection'} paddingY={12}>
      <VStack width={'100%'}>
        <Text fontSize={'2xl'}>{'Projects'}</Text>
        <Text>{'Forum web app'}</Text>
        <AccordionRoot multiple defaultValue={["a"]}>
          <AccordionItem value="a">
            <AccordionItemTrigger />
            <AccordionItemContent />
          </AccordionItem>
        </AccordionRoot>
      </VStack>
    </Box>
  );
}

export default Projects;