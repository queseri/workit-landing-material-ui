import "./App.css";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { leftSide, rightSide } from "./Styles";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BenefitsList from "./components/BenefitsList";

function App() {
    const colorTheme = useTheme();
    const { status } = colorTheme;
    const { darkPurple, lightGrey } = status;

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
                "&::after": {
                    zIndex: 0,
                    position: "absolute",
                    content: '""',
                    top: {
                        xs: "55%",
                        sm: "61%",
                        lg: "83%",
                    },
                    left: 0,
                    height: {
                        xs: "150vh",
                        sm: "120vh",
                        md: "105vh",
                        lg: "175vh"
                    },
                    width: "100vw",
                    backgroundColor: lightGrey,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    clipPath:
                        "polygon(0% 0%, 100% 0%, 100% 80%, 84% 82%, 68% 83%, 50% 84%, 31% 83%, 17% 82%, 0% 80%)",
                },
            }}
        >
            <Header />
            {/* MAIN ELEMENT */}
            <Box component={"main"} sx={[leftSide, rightSide]}>
                <Hero />
                <BenefitsList />
            </Box>

            <Aside />
            <Footer />
        </Container>
    );
}

export default App;
