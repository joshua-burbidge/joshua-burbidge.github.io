import { Link} from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

function ExternalLink({href, children}: {href:string, children: React.ReactNode}) {
  return (
    <Link href={href} target={"_blank"} colorPalette={'blue'}>
      {children}
      <LuExternalLink/>
    </Link>
  );
}

export default ExternalLink;