import { Box, Link, List, Text, VStack } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import { LuExternalLink } from "react-icons/lu";

function Projects() {
  return (
    <Box scrollMarginTop={'var(--header-height)'} id={'projectsSection'} 
      paddingY={10} width={'600px'}>
      <VStack>
        <Text fontSize={'4xl'}>{'Projects'}</Text>
        <AccordionRoot multiple defaultValue={["1"]} width={'100%'} size={'lg'} variant={'enclosed'}>
          <AccordionItem value="1">
            <AccordionItemTrigger>{'Forum web app'}</AccordionItemTrigger>
            <AccordionItemContent>
              <Text textStyle={'xl'}>
                {'A forum web app made with a Next.js frontend and Node.js + MySQL backend.'}
              </Text>
              <List.Root textStyle={'md'}>
                <List.Item>{'Deploys to AWS ECS and RDS using Github Actions and Terraform.'}</List.Item>
                <List.Item>
                  {'Includes load balancing, logging, HTTPS support, and healthchecks.'}
                </List.Item>
                <List.Item>
                  {'Uses '}
                  <Link href="https://auth0.com/docs/get-started" target={'_blank'} colorPalette={'teal'}>
                    {'Okta Auth0'}
                    <LuExternalLink/>
                  </Link> 
                  {' for user authentication'}</List.Item>
              </List.Root>
            </AccordionItemContent>
          </AccordionItem>
        </AccordionRoot>
      </VStack>
    </Box>
  );
}

export default Projects;