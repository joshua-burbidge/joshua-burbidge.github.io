import { Flex, Heading, HStack, Link } from "@chakra-ui/react";
import ExternalLink from "./components/ExternalLink";
import resume from '../resources/resume-public.pdf';

function Header() {
  return (
    <Flex 
      bgColor={'blue.50'} 
      justify={'space-between'}
      align={'center'}
      padding={6}
      position={'sticky'}
      top={0}
      left={0}
      zIndex={1}
      height={'var(--header-height)'}
      colorPalette={'blue'}
      borderBlockEnd={'1px solid black'}
    >
      <Link href={'#profile'}>
        <Heading textStyle={'3xl'} fontWeight={'bold'}>{'Joshua Burbidge'}</Heading>
      </Link>
      <HStack gap={8}>
        <Link href={'#profile'}>{'About Me'}</Link>
        <Link href={'#projects'}>{'Projects'}</Link>
        <ExternalLink 
          href={resume}
        >
          {'Resume'}
        </ExternalLink>
      </HStack>
    </Flex>
  );
}

export default Header;
