import * as React from "react"
import { ThemeProvider } from '@emotion/react';
import { colors } from '@semicolon/design-token'
import { getThemeName } from '@semicolon/react-theming';


interface Props {
    children: React.ReactNode,
    mode?: 'auto' | 'dark-only' | 'light-only'
}

export const SDSThemeProvider: React.FC<Props> = ({children, mode = 'auto'}) => {
    const theme = React.useMemo(() => {
        const colorTheme = colors[getThemeName(mode)];
        return {
            colors: {
                ...colorTheme.scheme
            }
        };
    },[mode])
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>   
    )
}

