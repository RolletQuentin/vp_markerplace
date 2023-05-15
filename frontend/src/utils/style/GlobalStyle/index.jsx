import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../../context";

const StyledGlobalStyle = createGlobalStyle`
    html, body {
        background: ${(props) => props.themeMode.body};
        color: ${(props) => props.themeMode.text};
        transition: all 0.50s linear;
    }

    a {
        color: ${(props) => props.themeMode.text};
        text-decoration: none;
    }
`;

function GlobalStyle() {
    const { themeMode } = useContext(ThemeContext);

    return <StyledGlobalStyle themeMode={themeMode} />;
}

export default GlobalStyle;
