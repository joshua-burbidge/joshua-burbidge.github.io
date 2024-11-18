import ExternalLink from "@/components/ExternalLink";
import { Text, VStack } from "@chakra-ui/react";
import React from "react";

export type LinkProps = {
  href: string,
  children: React.ReactNode
}

function Links({links}: {links: LinkProps[]}) {
  return (
    <>
      <Text textStyle={'lg'} fontWeight={'medium'}>{'Links'}</Text>
      <VStack align={'start'} gap={1} textStyle={'sm'}>
        {links.map((l, index) => (
          <ExternalLink href={l.href} key={index}>
            {l.children}
          </ExternalLink>
        ))}
      </VStack>
    </>
  );
}

export default Links;