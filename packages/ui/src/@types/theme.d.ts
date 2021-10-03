import { ColorScheme } from "@semicolon/design-token";

export type SDSTheme = {
    colors: ColorScheme
}

declare module '@emotion/react' {
    export interface Theme extends SDSTheme {}
}