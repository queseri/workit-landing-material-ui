import Grid2 from "@mui/material/Unstable_Grid2";
import Benefits from "./Benefits";

function BenefitsList() {
    return (
        <Grid2 container marginY={"5.5rem"} spacing={{ xs: 6 }}>
            <Benefits
                item={1}
                title={"Actionable insights"}
                content={`Optimize your products, improve customer
                satisfaction and stay ahead of the competition
                with our product data analytics.`}
            />
            <Benefits
                item={2}
                title={"Data-driven decisions"}
                content={`Make data-driven decisions with our product data
        analytics. Our AI-generated reports help you
        unlock insights hidden in your product data.`}
            />
            <Benefits
                item={3}
                title={"Always affordable"}
                content={`Always affordable pricing that scales with your
        business. Get top-quality product data analytics
        services without hidden costs or unexpected
        fees.`}
            />
        </Grid2>
    );
}

export default BenefitsList;
