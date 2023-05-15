import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { CartContext } from "../../utils/context";

fontawesome.library.add(faShoppingCart);

const printAnimation = keyframes`
    from {
        transform: scaleY(0%);
    }
    to {
        transform: scaleY(100%);
    }`;

const CartWrapper = styled.div`
    width: 110px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        cursor: pointer;
    }
`;
const CartIcon = styled.div`
    position: relative;
    width: 50px;
    height: 50px;

    &:hover {
        opacity: 70%;
    }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 100%;
    height: 100%;
`;

const AmountIndicator = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 50%;
    background-color: red;
    color: white;
    border-radius: 50%;
`;

const PriceIndicator = styled.span`
    font-size: 1.5em;
`;

const CartDescription = styled.div`
    position: absolute;

    text-align: start;
    background: linear-gradient(#696484, #8788ba);
    color: white;
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    margin: auto;
    transition: ${printAnimation} 200ms;
`;

const Formbutton = styled.div`
    display: flex;
    justify-content: space-around;
    margin: auto;
    padding-top: 15px;
`;

/** sert a mettre une ligne entre les produits */
const FormListItems = styled.div`
    border-bottom: 1px solid white;
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
    flex-direction: row;
`;

const FormDescriptionItems = styled.div`
    display: flex;
    flex-direction: column;
`;

function Cart({ className }) {
    const { cart, updateCart, totalPrice, totalAmount } =
        useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={className}>
            <CartWrapper
                onClick={() => {
                    isOpen ? setIsOpen(false) : setIsOpen(true);
                }}
            >
                <CartIcon>
                    <StyledFontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                    <AmountIndicator>{totalAmount}</AmountIndicator>
                </CartIcon>
                <PriceIndicator>{totalPrice}€</PriceIndicator>
            </CartWrapper>
            {isOpen ? (
                <CartDescription>
                    <h1>Panier</h1>
                    <table>
                        <tbody>
                            {cart.map(
                                (
                                    { id, name, cover, price, amount, size },
                                    index
                                ) => (
                                    <FormListItems>
                                        <FormDescriptionItems>
                                            <strong>
                                                {name + "(" + size + ")"}
                                            </strong>

                                            <div>
                                                {price}€ x{amount}=
                                                {amount * price}€
                                            </div>
                                        </FormDescriptionItems>
                                    </FormListItems>
                                )
                            )}
                        </tbody>
                    </table>

                    <Formbutton>
                        <button
                            className="button"
                            onClick={() => updateCart([])}
                        >
                            Vider le panier
                        </button>
                    </Formbutton>
                </CartDescription>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Cart;
