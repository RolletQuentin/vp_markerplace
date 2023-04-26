import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

const StyledFooter = styled.footer`
 
`;

const MainContainer = styled.div`
    display: flex;

    & > div,
    & > nav {
        display: flex;
        flex-direction: column;
        width: 300px;
    }
`;

const Credits = styled.div`
    margin: auto;
    text-align: center;
`;

// const StyledContact = styled.div``;

const StyledLink = styled(Link)`
    padding: 10px;
    text-decoration: none;
    color: ${(props) => props.thememode.text};

    &:hover{
        text-decoration:underline;
    }
`;

const StyledNavbar = styled.nav``;

function Footer() {
    const { theme, themeMode } = useContext(ThemeContext);
    return (
        <StyledFooter>
            <MainContainer theme={theme}>
                {/* <StyledContact>
                    <h2>Contact</h2>
                    <p>Une question ? Contactez-moi !</p>
                    <form>
                        <input></input>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                </StyledContact> */}
                <StyledNavbar>
                    <h2>Navigation</h2>
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
            </MainContainer>
            <Credits>Quentin Rollet © 2023 - Tous droits réservés.</Credits>
        </StyledFooter>
    );
}

export default Footer;
