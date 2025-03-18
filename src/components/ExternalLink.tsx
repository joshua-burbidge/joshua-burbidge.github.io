import { Link} from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

function ExternalLink({href, icon, children}: {href: string, icon?: boolean, children: React.ReactNode}) {
  return (
    <Link href={href} target={"_blank"} colorPalette={'blue'}>
      {children}
      {icon && <LuExternalLink/>}
    </Link>
  );
}

export default ExternalLink;