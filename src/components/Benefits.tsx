import { Typography, useTheme } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

function Benefits(props: { item: number; title: string; content: string }) {
    const colorTheme = useTheme();
    const { status } = colorTheme;
    const { midBlueGrey } = status;
    return (
        <Grid2
            container
            spacing={2}
            md={4}
            justifyContent={"center"}
            alignItems={"center"}
            paddingX={{ xs: "1rem" }}
            paddingY={"2rem"}
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
                    {props.item}
                </Typography>
            </Grid2>
            <Grid2 sm={10} md={12}>
                <Typography
                    variant="h2"
                    fontSize={{ xs: "1.75rem", md: "2rem" }}
                    textAlign={{ xs: "center", sm: "left", md: "center" }}
                    gutterBottom
                >
                    {props.title}
                </Typography>
                <Typography
                    variant="body2"
                    lineHeight={1.75}
                    fontSize={{ xs: "1rem", md: "1.125rem" }}
                    textAlign={{ xs: "center", sm: "left", md: "center" }}
                >
                    {props.content}
                </Typography>
            </Grid2>
        </Grid2>
    );
}

export default Benefits;
