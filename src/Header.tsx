import { Flex, Heading, HStack, Link } from "@chakra-ui/react";

function Header() {
  const textColor = 'blue.800';

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
    >
      <Link><Heading textStyle={'3xl'} fontWeight={'bold'} color={textColor}>{'Joshua Burbidge'}</Heading></Link>
      <HStack gap={8}>
        <Link color={textColor} fontWeight={'normal'} href={'#profile'}>{'About Me'}</Link>
        <Link color={textColor} fontWeight={'normal'} href={'#projectsSection'}>{'Projects'}</Link>
        <Link color={textColor} fontWeight={'normal'}>{'THERE'}</Link>
      </HStack>
    </Flex>
  );
}

export default Header;
