import "./App.css";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "./assets/images/logo-light.svg";
import LogoDark from "./assets/images/logo-dark.svg";
import HeroImg from "./assets/images/image-hero.webp";
import FounderImg from "./assets/images/image-founder.webp";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Facebook from "./assets/images/icon-facebook.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import Instagram from "./assets/images/icon-instagram.svg";

function App() {
    const colorTheme = useTheme();
    const { status } = colorTheme;
    const { darkPurple, pureWhite, lime, midBlueGrey } = status;

    return (
        <Container
            sx={{
                paddingInline: 0,
                "&::before": {
                    position: "absolute",
                    content: '""',
                    top: 0,
                    left: 0,
                    minHeight: "55vh",
                    width: "100vw",
                    backgroundColor: darkPurple,
                    zIndex: 0,
                    //  backgroundImage: "url('./assets/images/bg-hero.svg')",
                    //  backgroundSize: "cover",
                    //  backgroundRepeat: "no-repeat",
                    clipPath:
                        "polygon(0% 0%, 100% 0%, 100% 80%, 75% 85%, 50% 87%, 25% 85%, 0% 80%)",
                },
            }}
        >
            {/* HEADER */}
            <Box component={"header"} sx={{ position: "relative", zIndex: 1 }}>
                {/* NAV */}
                <Grid2
                    container
                    component={"nav"}
                    aria-label="home page header"
                >
                    {/* FIRST NAV ITEM TO WITH HOME LOGO LINK */}
                    <Grid2
                        xs={6}
                        display={"flex"}
                        justifyContent={"flex-start"}
                        alignItems={"center"}
                    >
                        <Link href="#">
                            <Box
                                component="img"
                                src={Logo}
                                alt=""
                                aria-hidden={true}
                            />
                        </Link>
                    </Grid2>

                    {/* SECOND NAV ITEM TO WITH APPLY ACCESS BTN */}
                    <Grid2
                        xs={6}
                        display={"flex"}
                        justifyContent={"flex-end"}
                        alignItems={"center"}
                    >
                        <Link
                            href="#"
                            color={pureWhite}
                            fontSize={"1rem"}
                            fontFamily={`"Manrope", "sans-serif"`}
                            fontWeight={700}
                            sx={{
                                textDecorationColor: lime,
                                textDecorationThickness: "3px",
                                textUnderlineOffset: "10px",
                            }}
                        >
                            Apply for access
                        </Link>
                    </Grid2>
                </Grid2>
            </Box>
            {/* HEADER END */}

            {/* MAIN ELEMENT */}
            <Box component={"main"} sx={{ position: "relative", zIndex: 1 }}>
                <Box marginTop={"4rem"}>
                    {/* MAIN HEADING ELEMENT */}
                    <Typography variant="h1" fontWeight={600}>
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
                        marginY={"2rem"}
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
                    </Link>
                    {/* HERO IMG */}
                    <Box>
                        <Box
                            component={"img"}
                            src={HeroImg}
                            alt="Mobile phone"
                            sx={{ opacity: 0.4 }}
                        />
                    </Box>
                </Box>
                {/* SECTIONS */}
                <Grid2 container marginY={"5rem"} spacing={6}>
                    {/* SECTION ONE*/}
                    <Grid2
                        container
                        spacing={2}
                        md={4}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Grid2
                            sm={2}
                            md={12}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Typography
                                component={"span"}
                                display={"block"}
                                fontWeight={600}
                                fontSize={"1.25rem"}
                                lineHeight={2}
                                height={"3rem"}
                                width={"3rem"}
                                fontFamily={"Fraunces, serif"}
                                border={`1px solid ${midBlueGrey}`}
                                borderRadius={"50%"}
                            >
                                1
                            </Typography>
                        </Grid2>
                        <Grid2 sm={10} md={12}>
                            <Typography variant="h2" fontSize={"1.75rem"}>
                                Actionable insights
                            </Typography>
                            <Typography variant="body2">
                                Optimize your products, improve customer
                                satisfaction and stay ahead of the competition
                                with our product data analytics.
                            </Typography>
                        </Grid2>
                    </Grid2>
                    {/* SECTION TWO */}
                    <Grid2
                        container
                        spacing={2}
                        md={4}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Grid2
                            sm={2}
                            md={12}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Typography
                                component={"span"}
                                display={"block"}
                                fontWeight={600}
                                fontSize={"1.25rem"}
                                lineHeight={2}
                                height={"3rem"}
                                width={"3rem"}
                                fontFamily={"Fraunces, serif"}
                                border={`1px solid ${midBlueGrey}`}
                                borderRadius={"50%"}
                            >
                                2
                            </Typography>
                        </Grid2>
                        <Grid2 sm={10} md={12}>
                            <Typography variant="h2">
                                Data-driven decisions
                            </Typography>
                            <Typography variant="body2">
                                Make data-driven decisions with our product data
                                analytics. Our AI-generated reports help you
                                unlock insights hidden in your product data.
                            </Typography>
                        </Grid2>
                    </Grid2>
                    {/* SECTION THREE*/}
                    <Grid2
                        container
                        spacing={2}
                        md={4}
                        justifyContent={"center"}
                        alignItems={"center"}
                    >
                        <Grid2
                            sm={2}
                            md={12}
                            display={"flex"}
                            justifyContent={"center"}
                            alignItems={"center"}
                        >
                            <Typography
                                component={"span"}
                                display={"block"}
                                fontWeight={600}
                                fontSize={"1.25rem"}
                                lineHeight={2}
                                height={"3rem"}
                                width={"3rem"}
                                fontFamily={"Fraunces, serif"}
                                border={`1px solid ${midBlueGrey}`}
                                borderRadius={"50%"}
                            >
                                3
                            </Typography>
                        </Grid2>
                        <Grid2 sm={10} md={12}>
                            <Typography variant="h2">
                                Always affordable
                            </Typography>
                            <Typography variant="body2">
                                Always affordable pricing that scales with your
                                business. Get top-quality product data analytics
                                services without hidden costs or unexpected
                                fees.
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Box>

            {/* ASIDE CONTENT */}
            <Stack spacing={2} component={"aside"}>
                <Box>
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
                    spacing={2}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={{
                        backgroundColor: darkPurple,
                        color: pureWhite,
                        padding: "0.9rem",
                        top: "-6rem",
                        position: "relative",
                    }}
                >
                    <Typography variant="h2" color={pureWhite}>
                        Be the first to test
                    </Typography>
                    <Typography
                        variant="body2"
                        lineHeight={1.75}
                        fontWeight={400}
                        fontSize={"1rem"}
                    >
                        Hi, I'm Louis Graham, the founder of the company. Book a
                        demo call with me to become a beta tester for our app
                        and kickstart your company. Apply for access below and
                        I'll be in touch to schedule a call.
                    </Typography>
                    <Link
                        href="#"
                        display={"inline-block"}
                        color={darkPurple}
                        marginY={"2rem"}
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
                        {" "}
                        Apply for access
                    </Link>
                </Stack>
            </Stack>

            {/* FOOTER CONTENT */}
            <Stack component={"footer"} spacing={3} justifyContent={"center"} alignItems={"center"}>
                <Box component={"nav"} aria-label="footer home navigation">
                    <Box
                        component="img"
                        src={LogoDark}
                        alt=""
                        aria-hidden={true}
                    />
                </Box>
                <Stack component={"ul"} spacing={2} direction={"row"}>
                    <Box component={"li"}>
                        <Link href="#">
                            <img src={Facebook} alt="" />
                        </Link>
                    </Box>
                    <Box component={"li"}>
                        <Link href="#">
                            {" "}
                            <img src={Twitter} alt="" />{" "}
                        </Link>
                    </Box>
                    <Box component={"li"}>
                        <Link href="#">
                            {" "}
                            <img src={Instagram} alt="" />
                        </Link>
                    </Box>
                </Stack>
            </Stack>
        </Container>
    );
}

export default App;
