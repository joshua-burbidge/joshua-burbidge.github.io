import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
import imgUrl from '../resources/profile.jpg';

function Profile() {
  return (
    <Box scrollMarginTop={'var(--header-height)'} id={'profile'} paddingY={12}>
      <Card direction={'row'} borderRadius={'lg'}>
        <Image src={imgUrl}></Image>
        <Stack padding={4}>
          <Box>
            <Text fontSize={'4xl'} fontWeight={'light'}>{'Joshua Burbidge'}</Text>
            <Text fontSize={'md'} fontWeight={600} marginTop={'-10px'}>{'Software Developer'}</Text>
          </Box>
          <Text>{'Card'}</Text>
          <Text>{'Card'}</Text>
        </Stack>
      </Card>
    </Box>
  );
}

export default Profile;
