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
    const { darkPurple } = status;

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
