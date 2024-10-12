import { Card, CardBody, Container, Text } from "@chakra-ui/react";

function Profile() {
  return (
    <Container scrollMarginTop={'var(--header-height)'} id={'profile'} paddingY={12}>
      <Card>
        <CardBody>
          <Text>{'Card'}</Text>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Profile;
