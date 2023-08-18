import "./App.css";
import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import Logo from "./assets/images/logo-light.svg";
import LogoDark from "./assets/images/logo-dark.svg";
import HeroImg from "./assets/images/image-hero.webp";
import FounderImg from "./assets/images/image-founder.webp";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Facebook from "./assets/images/icon-facebook.svg";
import Twitter from "./assets/images/icon-twitter.svg";
import Instagram from "./assets/images/icon-instagram.svg";
import { asidePanel, leftSide, rightSide } from "./Styles";

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
                    minHeight: {
                        xs: "63vh",
                        sm: "70vh",
                        lg: "95vh",
                    },
                    width: "100vw",
                    backgroundColor: darkPurple,
                    zIndex: 0,
                    //  backgroundImage: "url('./assets/images/bg-hero.svg')",
                    clipPath:
                        "polygon(0% 0%, 100% 0%, 100% 80%, 85% 84%, 70% 87%, 50% 87%, 30% 85%, 15% 83%, 0% 80%)",
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
                            <Box component="img" src={Logo} alt="workit home" />
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
                            fontSize={{ xs: "1rem", lg: "1.125rem" }}
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
            <Box component={"main"} sx={[leftSide, rightSide]}>
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
                {/* SECTIONS */}
                <Grid2 container marginY={"5.5rem"} spacing={{ xs: 6, md: 10 }}>
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
                            <Typography
                                variant="h2"
                                fontSize={{ xs: "1.75rem", md: "2rem" }}
                                gutterBottom
                            >
                                Actionable insights
                            </Typography>
                            <Typography
                                variant="body2"
                                lineHeight={1.75}
                                fontSize={{ xs: "1rem", md: "1.125rem" }}
                            >
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
                            <Typography
                                variant="h2"
                                fontSize={{ xs: "1.75rem", md: "2rem" }}
                                gutterBottom
                            >
                                Data-driven decisions
                            </Typography>
                            <Typography
                                variant="body2"
                                lineHeight={1.75}
                                fontSize={{ xs: "1rem", md: "1.125rem" }}
                            >
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
                            <Typography
                                variant="h2"
                                fontSize={{ xs: "1.75rem", md: "2rem" }}
                                gutterBottom
                            >
                                Always affordable
                            </Typography>
                            <Typography
                                variant="body2"
                                lineHeight={1.75}
                                fontSize={{ xs: "1rem", md: "1.125rem" }}
                            >
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
                        demo call with me to become a beta tester for our app
                        and kickstart your company. Apply for access below and
                        I'll be in touch to schedule a call.
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

            {/* FOOTER CONTENT */}
            <Stack
                component={"footer"}
                spacing={7}
                justifyContent={"center"}
                alignItems={"center"}
                marginTop={{ xs: "-2.5rem", sm: "2.5rem" }}
                marginBottom={"5rem"}
            >
                <Box component={"nav"} aria-label="footer home navigation">
                    <Box
                        component="img"
                        src={LogoDark}
                        alt=""
                        aria-hidden={true}
                    />
                </Box>
                <Stack component={"ul"} spacing={3} direction={"row"}>
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
