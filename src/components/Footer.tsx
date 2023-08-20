import { Stack, Box, Link } from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import LogoDark from "../assets/images/logo-dark.svg";

function Footer() {
    return (
        <Stack
            component={"footer"}
            spacing={7}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={{ xs: "-2.5rem", sm: "2.5rem", lg: "5.5rem" }}
            marginBottom={"5rem"}
        >
            <Box component={"nav"} aria-label="footer home navigation">
                <Link
                    href="#"
                    display={"block"}
                    paddingX={"1rem"}
                    paddingY={"1rem"}
                    className="btn-link btn-link-footer"
                >
                    <Box sx={visuallyHidden}>Workit landing page</Box>
                    <Box
                        component="img"
                        src={LogoDark}
                        alt=""
                        aria-hidden={true}
                    />
                </Link>
            </Box>
            <Stack component={"ul"} spacing={3} direction={"row"}>
                <Box component={"li"}>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        display={"block"}
                        paddingX={"1rem"}
                        paddingY={"1rem"}
                        className="btn-link"
                    >
                        <Box sx={visuallyHidden}>Facebook page</Box>
                        <img src={Facebook} alt="opens in new tab" />
                    </Link>
                </Box>
                <Box component={"li"}>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        display={"block"}
                        paddingX={"1rem"}
                        paddingY={"1rem"}
                        className="btn-link"
                    >
                        <Box sx={visuallyHidden}>Twitter page</Box>
                        <img src={Twitter} alt="opens in new tab" />
                    </Link>
                </Box>
                <Box component={"li"}>
                    <Link
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        display={"block"}
                        paddingX={"1rem"}
                        paddingY={"1rem"}
                        className="btn-link"
                    >
                        <Box sx={visuallyHidden}>Instagram page</Box>
                        <img src={Instagram} alt="opens in new tab" />
                    </Link>
                </Box>
            </Stack>
        </Stack>
    );
}

export default Footer;
