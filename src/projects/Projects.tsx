import { Box, Em, List, Text, VStack } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import ExternalLink from "../components/ExternalLink";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <Box scrollMarginTop={'var(--header-height)'} id={'projectsSection'} 
      paddingY={10} width={'600px'}>
      <VStack>
        <Text fontSize={'4xl'}>{'Projects'}</Text>
        <AccordionRoot multiple defaultValue={["1", "2"]} width={'100%'} size={'lg'} variant={'enclosed'}>
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
                  <ExternalLink href={"https://auth0.com/docs/get-started"}>
                    {'Okta Auth0'}
                  </ExternalLink>
                  {' for user authentication'}</List.Item>
              </List.Root>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionItemTrigger>
              <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                <Text>{'graph_rs: Rust polynomial grapher'}</Text>
                <ExternalLink href={"https://github.com/JoshBurbidge/graph_rs"}>
                  <FaGithub/>
                </ExternalLink>
              </Box>
            </AccordionItemTrigger>
            <AccordionItemContent>
              <Text>{'Rust application that graphs polynomial functions using the 2D vector graphics library '}
                <ExternalLink href={"https://github.com/femtovg/femtovg"}>
                  <Em>{'femtovg.'}</Em>
                </ExternalLink>
              </Text>
            </AccordionItemContent>
          </AccordionItem>
        </AccordionRoot>
      </VStack>
    </Box>
  );
}

export default Projects;