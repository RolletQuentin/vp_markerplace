import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shoppingItemList } from "../../data/shoppingItem";
import styled from "styled-components";
import { CartContext, ThemeContext } from "../../utils/context";

const MainWrapper = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
`;

const ImageWrapper = styled.img`
    border-radius: 10px;
    background-color: white;
    height: 400px;

    &:hover {
        transform: scale(120%);
    }
`;

const ProductWrapper = styled.div`
    display: flex;
`;

const SizeWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
`;

const SizeButton = styled.button`
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    background-color: ${({ isSelected }) =>
        isSelected ? "black" : "lightgray"};
    color: ${({ isSelected }) => (isSelected ? "white" : "black")};
    cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
`;

const InformationWrapper = styled.div`
    padding: 50px;
`;

const Ratings = styled.div`
    display: flex;
    padding-top: 20px;

    & > div {
        margin: 20px;
    }

    & > div:first-child {
        margin-left: 0px;
    }
`;

const RatingsWrapper = styled.div`
    padding-top: 60px;
`;

const Rating = styled.div`
    padding: 20px;
    background-color: ${(props) => props.thememode.backgroundLight};
    border-radius: 10px;
`;

const SetAmountWrapper = styled.div`
    display: flex;
    align-items: center;

    & span {
        margin: 0px 5px 0px 5px;
        font-size: 20px;
    }
`;

const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    font-size: 2em;
    padding-bottom:6px;
`;

function Product() {
    const { id } = useParams();
    const { cart, updateCart } = useContext(CartContext);
    const product = shoppingItemList.find((item) => item.id === id); // Recherche du produit dans la liste d'objets
    const [selectedSize, setSelectedSize] = useState("M");
    const [amount, setAmount] = useState(0);
    const { themeMode } = useContext(ThemeContext);

    // function to add to cart with a pre-treatment of the data belong how many articles are in the cart
    const addToCart = (name, price, amount, size) => {
        // we verify if the product is already in the cart or not
        const currentProductAdded = cart.find(
            (product) => product.name === name && product.size === size
        );

        if (currentProductAdded) {
            // we get all the objects which are in the cart who don't correspond to the currentProduct
            const cartFilteredCurrentProduct = cart.filter(
                (product) => product.name !== name || product.size !== size
            );
            // if the user not retire all the product
            if (amount !== 0) {
                updateCart([
                    ...cartFilteredCurrentProduct,
                    { name, price, amount: amount, size: size },
                ]);
            }
            // we push the article to the cart, because the amount is 0
            else {
                updateCart([...cartFilteredCurrentProduct]);
            }
        } else {
            if (amount !== 0) {
                updateCart([
                    ...cart,
                    { name, price, amount: amount, size: size },
                ]);
            }
        }
    };

    const amountCurrentProductWithSize = () => {
        let filteredCart;
        if (product.category === "clothe") {
            filteredCart = cart.filter(
                (p) => p.name === product.name && p.size === selectedSize
            );
        } else {
            filteredCart = cart.filter((p) => p.name === product.name);
        }
        if (filteredCart.length === 0) {
            return 0;
        } else {
            return filteredCart[0].amount;
        }
    };

    useEffect(
        () => addToCart(product.name, product.price, amount, selectedSize),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [amount]
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setAmount(amountCurrentProductWithSize()), [selectedSize]);

    const toggleAmount = async (n) => {
        const maxStock = () => {
            if (product.category === "clothe") {
                return product.stock[selectedSize];
            } else {
                return product.stock;
            }
        };
        if (!(n < 0 && amount === 0) && amount + n <= maxStock()) {
            setAmount(amount + n);
        }
    };

    // Affichage du produit
    return (
        <MainWrapper>
            <ProductWrapper>
                <ImageWrapper src={product.cover} alt={product.name} />
                <InformationWrapper>
                    <h1>{product.name}</h1>
                    <p>{product.price} €</p>
                    <p>{product.longDescription}</p>
                    {product.category === "clothe" && (
                        <>
                            <h3>Taille :</h3>
                            <SizeWrapper>
                                {Object.entries(product.stock).map(
                                    ([size, quantity]) => (
                                        <SizeButton
                                            key={size}
                                            isSelected={selectedSize === size}
                                            isDisabled={quantity === 0}
                                            onClick={() =>
                                                setSelectedSize(size)
                                            }
                                        >
                                            {size}
                                            {quantity === 0 && " - Épuisé"}
                                        </SizeButton>
                                    )
                                )}
                            </SizeWrapper>

                            <p>
                                Stock :{" "}
                                {product.stock[selectedSize] -
                                    amountCurrentProductWithSize()}{" "}
                                {selectedSize.toUpperCase()}
                            </p>
                        </>
                    )}
                    {product.category !== "clothe" && (
                        <p>
                            Stock :{" "}
                            {product.stock - amountCurrentProductWithSize()}
                        </p>
                    )}
                    <SetAmountWrapper>
                        <StyledButton onClick={() => toggleAmount(-1)}>
                            -
                        </StyledButton>
                        <span>{amount}</span>
                        <StyledButton onClick={() => toggleAmount(1)}>
                            +
                        </StyledButton>
                    </SetAmountWrapper>
                </InformationWrapper>
            </ProductWrapper>

            <RatingsWrapper>
                <h2>⭐ Avis ⭐</h2>
                <Ratings>
                    {product.ratings.map((rating, index) => (
                        <Rating key={index} thememode={themeMode}>
                            <h3>{rating.name}</h3>
                            <p>Note : {rating.stars}/5</p>
                            <p>{rating.comment}</p>
                        </Rating>
                    ))}
                </Ratings>
            </RatingsWrapper>
        </MainWrapper>
    );
}

export default Product;
