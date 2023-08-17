import LeftPattern from "./assets/images/bg-pattern-1.svg";
import RightPattern from "./assets/images/bg-pattern-2.svg";
import BottomPattern from "./assets/images/bg-pattern-3.svg";

export const leftSide = {
    position: "relative",
    zIndex: 1,
    "&::before": {
        position: "absolute",
        content: '""',
        top: 0,
        left: "-15rem",
        transform: "rotate(12deg) scale(1.5)",
        height: {
            xs: 0,
            sm: "13.5rem",
        },
        width: {
            xs: 0,
            sm: "17rem",
        },
        backgroundImage: `url('${LeftPattern}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
};

export const rightSide = {
    "&::after": {
        position: "absolute",
        content: '""',
        top: 0,
        right: "-12.5rem",
        height: {
            xs: 0,
            sm: "13.5rem",
        },
        width: {
            xs: 0,
            sm: "17rem",
        },
        backgroundImage: `url('${RightPattern}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
};

export const asidePanel = {
    position: "relative",
    zIndex: 1,
    "&::before": {
        zIndex: 1,
        position: "absolute",
        content: '""',
        bottom: 0,
        right: "3.5rem",
        height: {
            xs: 0,
            sm: "13.5rem",
        },
        width: {
            xs: 0,
            sm: "17rem",
        },
        backgroundImage: `url('${BottomPattern}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
};
