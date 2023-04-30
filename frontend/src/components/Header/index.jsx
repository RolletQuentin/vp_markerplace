import styled from "styled-components";
import { Link } from "react-router-dom";
import DarkLightButton from "../DarkLightButton";
import DarKLogo from "../../asset/Vp/vp.PNG";
import LightLogo from "../../asset/Vp/vp.PNG";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import Cart from "../Cart";
import Profile from "../Profile";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
<<<<<<< Updated upstream
=======
    padding-bottom:50px;
>>>>>>> Stashed changes
    
`;

const StyledLogo = styled.img`
    width: 150px;
    height: 150px;
`;

const StyledLink = styled(Link)`

    padding: 10px;
    text-decoration: none;
    font-size: 1.1em;
    color: ${(props) => props.thememode.text};


    &:hover{
        text-decoration:underline;
    }
`;

const StyledNavbar = styled.nav`
    text-align:center;

    
`;



const StyledOptionsButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;

    & > div {
        padding: 10px;
    }
`;

const StyledCart = styled(Cart)``;

function Header() {
    const { theme, themeMode } = useContext(ThemeContext);
    return (
        <StyledHeader>
            {theme === "light" ? (
                <StyledLogo src={LightLogo} />
            ) : (
                <StyledLogo src={DarKLogo} />
            )}
            <div>
                <h1>VP MARKETPLACE</h1>
                <StyledNavbar>
                    <StyledLink to="/" thememode={themeMode}>
                        Accueil
                    </StyledLink>
                    <StyledLink to="produits" thememode={themeMode}>
                        Produits
                    </StyledLink>
                    <StyledLink to="contact" thememode={themeMode}>
                        Contact
                    </StyledLink>
                </StyledNavbar>
            </div>
            <StyledOptionsButton>
                <DarkLightButton />
                <Profile />
                <StyledCart />
            </StyledOptionsButton>
        </StyledHeader>
    );
}

export default Header;

