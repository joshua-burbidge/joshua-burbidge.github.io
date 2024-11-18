import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
import newImg from '../resources/profile-edited-2.jpeg';

function Profile() {
  return (
    <Box scrollMarginTop={'var(--header-height)'} id={'profile'} paddingY={12}>
      <Card.Root flexDirection={'row'} width={'600px'} borderRadius={'lg'} variant={'elevated'}>
        <Image src={newImg} height={'250px'} borderLeftRadius={'lg'}></Image>
        <Stack padding={4} marginX={'auto'}>
          <Box>
            <Text fontSize={'4xl'} fontWeight={'light'}>{'Joshua Burbidge'}</Text>
            <Text fontSize={'md'} fontWeight={600} marginTop={'-10px'}>{'Software Developer'}</Text>
          </Box>
          <Text>{'Hi!'}</Text>
        </Stack>
      </Card.Root>
    </Box>
  );
}

export default Profile;
