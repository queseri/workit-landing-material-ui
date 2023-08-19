import { Stack, Box, Typography, Link, useTheme } from "@mui/material";
import { asidePanel } from "../Styles";
import FounderImg from "../assets/images/image-founder.webp";

function Aside() {
    const colorTheme = useTheme();
    const { status } = colorTheme;
    const { darkPurple, pureWhite, lime } = status;
    return (
        <Stack
            paddingTop={"2.5rem"}
            // marginTop={{ md: "12.5rem" }}
            spacing={2}
            component={"aside"}
            direction={{ sm: "row" }}
            alignItems={{ sm: "baseline", md: "last baseline" }}
            sx={asidePanel}
        >
            <Box
                padding={{ xs: "1.95rem", sm: 0 }}
                flex={{
                    sm: "1 1 30%",
                    md: "1 1 45%",
                }}
            >
                <Box
                    component={"img"}
                    src={FounderImg}
                    alt="Louis Graham"
                    width={"100%"}
                    maxWidth={"29.8rem"}
                    maxHeight={"29.8rem"}
                />
            </Box>
            <Stack
                flex={{
                    sm: "1 1 65%",
                    md: "1 1 55%",
                }}
                //  spacing={2}
                justifyContent={"center"}
                alignItems={{ xs: "center", sm: "baseline" }}
                sx={{
                    backgroundColor: darkPurple,
                    color: pureWhite,
                    padding: { xs: "1.9rem", md: "3rem" },
                    marginTop: "2rem",
                    top: {
                        xs: "-7.25rem",
                        sm: "-2rem",
                        md: "-3rem",
                    },
                    left: {
                        sm: "-5rem",
                        md: "-8rem",
                    },
                    position: "relative",
                }}
            >
                <Typography
                    variant="h2"
                    color={pureWhite}
                    fontSize={{ xs: "2rem", sm: "3rem" }}
                    lineHeight={1.5}
                >
                    Be the first to test
                </Typography>
                <Typography
                    variant="body2"
                    lineHeight={1.75}
                    fontWeight={400}
                    fontSize={"1rem"}
                    textAlign={{ md: "left" }}
                >
                    Hi, I'm Louis Graham, the founder of the company. Book a
                    demo call with me to become a beta tester for our app and
                    kickstart your company. Apply for access below and I'll be
                    in touch to schedule a call.
                </Typography>
                <Link
                    href="#"
                    display={"inline-block"}
                    color={darkPurple}
                    marginTop={"1.5rem"}
                    fontSize={"1rem"}
                    fontFamily={`"Manrope", "sans-serif"`}
                    fontWeight={700}
                    paddingX={"1.5rem"}
                    paddingY={"1.5rem"}
                    sx={{
                        backgroundColor: lime,
                        textDecoration: "none",
                    }}
                >
                    {" "}
                    Apply for access
                </Link>
            </Stack>
        </Stack>
    );
}

export default Aside;
