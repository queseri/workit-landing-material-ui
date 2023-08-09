import "./App.css";
import { Box, Container, Link } from "@mui/material";
import Logo from "./assets/images/logo-light.svg";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function App() {
  return (
    <Box>
      <Container component={"header"}>
        <Grid2 container component={"nav"} aria-label="home page">
          <Grid2 xs={6}>
            <Link href="#">
              <img src={Logo} alt="" aria-hidden={true} />
            </Link>
          </Grid2>
          <Grid2 xs={6}>
            <Link href="#">Apply for access</Link>
          </Grid2>
        </Grid2>
      </Container>
      Data tailored to your needs. Learn more 1 Actionable insights Optimize
      your products, improve customer satisfaction and stay ahead of the
      competition with our product data analytics. 2 Data-driven decisions Make
      data-driven decisions with our product data analytics. Our AI-generated
      reports help you unlock insights hidden in your product data. 3 Always
      affordable Always affordable pricing that scales with your business. Get
      top-quality product data analytics services without hidden costs or
      unexpected fees. Be the first to test Hi, I'm Louis Graham, the founder of
      the company. Book a demo call with me to become a beta tester for our app
      and kickstart your company. Apply for access below and I'll be in touch to
      schedule a call. Apply for access
    </Box>
  );
}

export default App;
