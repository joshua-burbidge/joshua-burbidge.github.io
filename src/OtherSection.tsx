import { Card, CardBody, Container, Text } from "@chakra-ui/react";

function OtherSection() {
  return (
    <Container scrollMarginTop={'var(--header-height)'} id={'otherSection'} paddingY={12}>
      <Card>
        <CardBody>
          <Text>{'Next Section'}</Text>
        </CardBody>
      </Card>
    </Container>
  );
}

export default OtherSection;
