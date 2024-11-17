import { Card, Container, Text } from "@chakra-ui/react";

function OtherSection() {
  return (
    <Container scrollMarginTop={'var(--header-height)'} id={'otherSection'} paddingY={12}>
      <Card.Root>
        <Card.Body>
          <Text>{'Next Section'}</Text>
        </Card.Body>
      </Card.Root>
    </Container>
  );
}

export default OtherSection;
