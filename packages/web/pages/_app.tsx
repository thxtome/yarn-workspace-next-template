import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";
import theme from "@shared/styles/theme";
import GlobalStyle from "@shared/styles/globalStyle";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <RecoilRoot>
                <GlobalStyle />
                <Component {...pageProps} />;
            </RecoilRoot>
        </ThemeProvider>
    );
}

export default MyApp;
