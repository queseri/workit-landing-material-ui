import { Box, Typography, Link, useTheme } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import HeroImg from "../assets/images/image-hero.webp";

function Hero() {
    const colorTheme = useTheme();
    const { status } = colorTheme;
    const { darkPurple, lime } = status;
    return (
        <Box marginTop={"4rem"}>
            {/* MAIN HEADING ELEMENT */}
            <Typography
                variant="h1"
                fontWeight={600}
                maxWidth={"41rem"}
                margin={"auto"}
                paddingX={{
                    sm: "4rem",
                }}
            >
                {" "}
                Data{" "}
                <Typography
                    variant="h1"
                    component="span"
                    sx={{
                        textDecoration: "underline",
                        textDecorationColor: lime,
                        textDecorationThickness: "3px",
                        textUnderlineOffset: "10px",
                    }}
                >
                    tailored
                </Typography>{" "}
                to your needs.
            </Typography>
            {/* LEARN MORE LINK BTN */}
            <Link
                href="#"
                display={"inline-block"}
                color={darkPurple}
                marginY={{ xs: "2.5rem", lg: "1.5rem" }}
                fontSize={"1rem"}
                fontFamily={`"Manrope", "sans-serif"`}
                fontWeight={700}
                paddingX={"1.5rem"}
                paddingY={"1rem"}
                sx={{
                    backgroundColor: lime,
                    textDecoration: "none",
                }}
            >
                Learn more
                <Box component={"span"} sx={visuallyHidden}>
                    about our services and products
                </Box>
            </Link>
            {/* HERO IMG */}
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    component={"img"}
                    src={HeroImg}
                    alt="Mobile phone"
                    width={{ sm: "75%", md: "66.6%" }}
                    sx={{
                        opacity: {
                            xs: 0.4,
                            sm: 1,
                        },
                    }}
                />
            </Box>
        </Box>
    );
}

export default Hero;
