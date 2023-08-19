import { Box, Link, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Logo from "../assets/images/logo-light.svg";

function Header() {
    const colorTheme = useTheme();
    const { status } = colorTheme;
    const { pureWhite, lime } = status;
    return (
        <Box component={"header"} sx={{ position: "relative", zIndex: 1 }}>
            {/* NAV */}
            <Grid2 container component={"nav"} aria-label="home page header">
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
    );
}

export default Header;
