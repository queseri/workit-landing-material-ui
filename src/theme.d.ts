// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            pureWhite: string,
            lightGrey: string,
            midBlueGrey: string,
            darkPurple: string,
            lime: string,
        }
    }
    interface ThemeOptions {
        status: {
            pureWhite: React.CSSProperties['color'],
            lightGrey: React.CSSProperties['color'],
            midBlueGrey:  React.CSSProperties['color'],
            darkPurple:  React.CSSProperties['color'],
            lime: React.CSSProperties['color'],
        }
    }
}