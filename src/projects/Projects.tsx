import { Box, Em, Image, List, Text, VStack } from "@chakra-ui/react";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";
import ExternalLink from "../components/ExternalLink";
import { FaGithub } from "react-icons/fa";
import graphRsImg from '../../resources/graph_rs_2.png';
import Links, { LinkProps } from "./Links";

function Projects() {
  const forumLinks: LinkProps[] = [{
    href: "https://github.com/JoshBurbidge/forum-client",
    children: (<><FaGithub/><Text>{'Github - client'}</Text></>)
  }, {
    href: "https://github.com/JoshBurbidge/forum-server",
    children: (<><FaGithub/><Text>{'Github - server'}</Text></>)
  }];
  const graphLinks = [{
    href: "https://github.com/JoshBurbidge/graph_rs",
    children: (<><FaGithub/><Text>{'Github'}</Text></>)
  }];

  return (
    <Box 
      scrollMarginTop={'var(--header-height)'} 
      id={'projects'} 
      paddingY={10} 
      width={'800px'}
    >
      <VStack>
        <Text fontSize={'4xl'}>{'Projects'}</Text>
        <AccordionRoot multiple defaultValue={["1", "2"]} width={'100%'} size={'lg'} variant={'enclosed'}>
          <AccordionItem value="1">
            <AccordionItemTrigger>{'Forum web app'}</AccordionItemTrigger>
            <AccordionItemContent>
              <VStack align={'left'}>
                <Text>
                  {'A forum web app made with a Next.js frontend and Node.js + MySQL backend.'}
                </Text>
                <List.Root>
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
                <Links links={forumLinks}/>
              </VStack>
            </AccordionItemContent>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionItemTrigger>
              <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
                <Text>{'graph_rs: Rust polynomial grapher'}</Text>
                {/* <ExternalLink href={"https://github.com/JoshBurbidge/graph_rs"}>
                  <FaGithub/>
                </ExternalLink> */}
              </Box>
            </AccordionItemTrigger>
            <AccordionItemContent>
              <VStack align={'left'}>
                <Text>{'Rust application that graphs polynomial functions using the 2D vector graphics library '}
                  <ExternalLink href={"https://github.com/femtovg/femtovg"}>
                    <Em>{'femtovg.'}</Em>
                  </ExternalLink>
                </Text>
                <Image src={graphRsImg} width={'100%'} borderRadius={'xs'} marginTop={'5px'}/>
                <Links links={graphLinks}/>
              </VStack>
            </AccordionItemContent>
          </AccordionItem>
        </AccordionRoot>
      </VStack>
    </Box>
  );
}

export default Projects;