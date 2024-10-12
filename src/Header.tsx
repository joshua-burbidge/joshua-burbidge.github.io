import { Flex, Heading, HStack, Link } from "@chakra-ui/react";

function Header() {
  return (
    <Flex 
      bgColor={'blue.100'} 
      justify={'space-between'}
      align={'center'}
      padding={6}
      position={'sticky'}
      top={0}
      left={0}
      width={'100%'}
      height={'100px'}
      zIndex={1}
    >
      <Link><Heading size={'lg'}>{'Joshua Burbidge'}</Heading></Link>
      <HStack spacing={8}>
        <Link fontWeight={'normal'}>{'THERE'}</Link>
        <Link fontWeight={'normal'}>{'THERE'}</Link>
        <Link fontWeight={'normal'}>{'THERE'}</Link>
      </HStack>
    </Flex>
  );
}

export default Header;