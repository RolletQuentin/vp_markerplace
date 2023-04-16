import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../utils/context";

const ShoppingItemWrapper = styled.div`
    background-color: ${(props) => props.thememode.backgroundLight};
    margin: 30px;
    border: 1px solid black;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 300px;

    & a {
        width: 100%;
        height: 100%;
    }

    &:hover {
        transform: scale(105%);
        box-shadow: 5px 5px 5px white;
    }
`;

const ImageContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: center;
    max-height: 250px;
`;

const ImageWrapper = styled.img`
    max-width: 100%;
    height: auto;
    max-height: 100%;
    width: auto;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    & > span {
        padding: 5px 0px 5px 0px;
    }
`;

const StyledName = styled.span`
    /* padding: 10px; */
    font-size: 1.5em;
`;

const StyledPrice = styled.span`
    font-size: 2em;
`;

function ShoppingItem({ id, cover, name, price, shortDescription, ratings }) {
    const { themeMode } = useContext(ThemeContext);

    const average = () => {
        if (!Array.isArray(ratings) || ratings.length === 0) {
            return -1;
        }

        const totalStars = ratings.reduce((acc, { stars }) => acc + stars, 0);
        const averageRating = totalStars / ratings.length;

        return Math.round(averageRating * 10) / 10;
    };

    return (
        <ShoppingItemWrapper thememode={themeMode}>
            <Link to={id}>
                <ImageContainer>
                    <ImageWrapper src={cover} alt={name} />
                </ImageContainer>
            </Link>
            <InfoContainer>
                <Link to={id}>
                    <StyledName>{name}</StyledName>
                </Link>
                <span>{shortDescription}</span>
                <span>
                    {average() === -1 ? "Pas D'avis" : average() + "/ 5 ⭐"}
                </span>
                <StyledPrice>{price}€</StyledPrice>
            </InfoContainer>
        </ShoppingItemWrapper>
    );
}

export default ShoppingItem;
