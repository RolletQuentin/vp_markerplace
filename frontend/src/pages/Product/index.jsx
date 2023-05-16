import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../utils/context";

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

const InformationWrapper = styled.div`
    padding: 50px;
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
    padding-bottom: 6px;
`;

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        async function fetchData(url) {
            const response = await fetch(url);
            const json = await response.json();
            const { shoppingItem } = json;
            setProduct(shoppingItem);
        }
        fetchData("http://localhost:8000/api/shoppingItem/" + id);
    }, [id]);

    const { cart, updateCart } = useContext(CartContext);
    const [amount, setAmount] = useState(0);

    // function to add to cart with a pre-treatment of the data belong how many articles are in the cart
    const addToCart = (name, price, amount) => {
        // we verify if the product is already in the cart or not
        const currentProductAdded = cart.find(
            (product) => product.name === name
        );

        if (currentProductAdded) {
            // we get all the objects which are in the cart who don't correspond to the currentProduct
            const cartFilteredCurrentProduct = cart.filter(
                (product) => product.name !== name
            );
            // if the user not retire all the product
            if (amount !== 0) {
                updateCart([
                    ...cartFilteredCurrentProduct,
                    { name, price, amount: amount },
                ]);
            }
            // we push the article to the cart, because the amount is 0
            else {
                updateCart([...cartFilteredCurrentProduct]);
            }
        } else {
            if (amount !== 0) {
                updateCart([...cart, { name, price, amount: amount }]);
            }
        }
    };

    useEffect(
        () => {
            if (!(product === null)) {
                addToCart(product.name, product.price, amount);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [amount]
    );

    useEffect(() => {
        const amountCurrentProductWithSize = () => {
            let filteredCart;
            if (product) {
                filteredCart = cart.filter((p) => p.name === product.name);
                if (filteredCart.length === 0) {
                    return 0;
                } else {
                    return filteredCart[0].amount;
                }
            }
        };

        setAmount(amountCurrentProductWithSize());
    }, [cart, product]);

    const amountCurrentProductWithSize = () => {
        let filteredCart;
        if (product) {
            filteredCart = cart.filter((p) => p.name === product.name);
            if (filteredCart.length === 0) {
                return 0;
            } else {
                return filteredCart[0].amount;
            }
        }
    };

    const toggleAmount = async (n) => {
        if (!(n < 0 && amount === 0) && amount + n <= product.stock) {
            setAmount(amount + n);
        }
    };

    // Affichage du produit
    return product === null ? (
        <div></div>
    ) : (
        <MainWrapper>
            <ProductWrapper>
                <ImageWrapper src={product.cover} alt={product.name} />
                <InformationWrapper>
                    <h1>{product.name}</h1>
                    <p>{product.price} €</p>
                    <p>{product.longDescription}</p>

                    <p>
                        Stock : {product.stock - amountCurrentProductWithSize()}
                    </p>

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
        </MainWrapper>
    );
};

export default Product;
