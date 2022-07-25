/* eslint-disable react/jsx-props-no-spreading */
import { Box, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { shimmer, toBase64 } from "../libs/Shimmer";

export default function Headshot({ src = "/images/me.webp", ...props }) {
  return (
    <Box
      height={195}
      width={195}
      position="relative"
      borderRadius="100%"
      borderColor={useColorModeValue("purple.50", "#FEF6E5")}
      backgroundColor={useColorModeValue("purple.100", "red.200")}
      borderWidth={8}
      borderStyle="solid"
      boxShadow="lg"
      transition="all 250ms"
      _hover={{
        boxShadow: "xl",
        transition: "250ms",
        borderColor: useColorModeValue("purple.300", "red.400"),
      }}
      {...props}
    >
      <Image
        priority
        layout="fill"
        display="inline-block"
        src={src}
        alt="Profile Picture"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />
    </Box>
  );
}
