import { Flex, Heading, HStack, Link, theme } from "@chakra-ui/react";

function Header() {
  console.log(theme);

  return (
    <Flex 
      bgColor={'var(--chakra-colors-chakra-subtle-bg)'} 
      justify={'space-between'}
      align={'center'}
      padding={6}
      position={'sticky'}
      top={0}
      left={0}
      zIndex={1}
      textColor={'blue.800'}
      height={'var(--header-height)'}
    >
      <Link><Heading size={'lg'}>{'Joshua Burbidge'}</Heading></Link>
      <HStack spacing={8}>
        <Link fontWeight={'normal'} href={'#stack'}>{'THERE'}</Link>
        <Link fontWeight={'normal'} href={'#profile'}>{'THERE'}</Link>
        <Link fontWeight={'normal'}>{'THERE'}</Link>
      </HStack>
    </Flex>
  );
}

export default Header;
