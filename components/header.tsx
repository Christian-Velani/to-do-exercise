import Image from "next/image";
import rocketImage from "/images/rocket.svg";
import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      bgcolor={"#0D0D0D"}
      height={"12.5rem"}
      justifyContent={"center"}
    >
      <Image src={rocketImage} width={22} height={36} alt="rocket" />
      <Typography
        variant="h3"
        fontFamily={"inherit"}
        fontWeight={900}
        fontSize={"2.5rem"}
        color={"#4EA8DE"}
        marginLeft={"0.75rem"}
      >
        to
      </Typography>
      <Typography
        variant="h3"
        fontFamily={"inherit"}
        fontWeight={900}
        fontSize={"2.5rem"}
        color={"#5E60CE"}
      >
        do
      </Typography>
    </Box>
  );
}
