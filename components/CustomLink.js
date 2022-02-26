import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

export default function CustomLink({ as, href, ...otherProps }) {
  return (
    <NextLink target="_blank" as={as} href={href} passHref>
      <Link target="_blank" color={"blue.400"} {...otherProps}></Link>
    </NextLink>
  );
}
