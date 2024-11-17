import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
// import imgUrl from '../resources/profile.jpg';
import newImg from '../resources/profile-edited-2.jpeg';

function Profile() {
  return (
    <Box scrollMarginTop={'var(--header-height)'} id={'profile'} paddingY={12}>
      <Card.Root flexDirection={'row'} borderRadius={'lg'} variant={'elevated'}>
        <Image src={newImg} height={'200px'} borderLeftRadius={'lg'}></Image>
        <Stack padding={4}>
          <Box>
            <Text fontSize={'4xl'} fontWeight={'light'}>{'Joshua Burbidge'}</Text>
            <Text fontSize={'md'} fontWeight={600} marginTop={'-10px'}>{'Software Developer'}</Text>
          </Box>
          <Text>{'Card'}</Text>
          <Text>{'Card'}</Text>
        </Stack>
      </Card.Root>
    </Box>
  );
}

export default Profile;
