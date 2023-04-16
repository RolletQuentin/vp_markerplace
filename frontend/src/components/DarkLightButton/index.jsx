import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import fontawesome from "@fortawesome/fontawesome";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

fontawesome.library.add(faSun, faMoon);

const ButtonContainer = styled.div`
    width: 98px;
    height: 39px;
`;

const StyledLabel = styled.label`
    width: 45px;
    height: 20px;
    background-color: #111;
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 3px 10px 3px 10px;
    position: relative;
    transform: scale(1.5);
`;

const StyledBall = styled.div`
    width: 20px;
    height: 20px;
    background-color: white;
    position: absolute;
    top: 3px;
    left: 7px;
    border-radius: 50%;
    transition: transform 0.5s linear;
    ${(props) =>
        props.theme === "light" &&
        css`
            transform: translateX(33px);
        `}
`;

const StyledIcon = styled(FontAwesomeIcon)`
    color: white;
`;

function DarkLightButton({ className }) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <ButtonContainer className={className} onClick={toggleTheme}>
            <StyledLabel htmlFor="checkbox">
                <StyledIcon icon="fa-solid fa-sun" />
                <StyledIcon icon="fa-solid fa-moon" />
                <StyledBall theme={theme} />
            </StyledLabel>
        </ButtonContainer>
    );
}

export default DarkLightButton;
