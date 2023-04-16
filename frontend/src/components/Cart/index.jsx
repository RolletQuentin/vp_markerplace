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
    background-color: white;
    color: black;
    transition: ${printAnimation} 200ms;
`;

function Cart({ className }) {
    const { cart, updateCart, totalPrice, totalAmount } =
        useContext(CartContext);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={className} onClickAway={() => setIsOpen(false)}>
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
                                ({ name, price, amount, size }, index) => (
                                    <tr key={`${name}-${index}`}>
                                        <td>{name + "(" + size + ")"}</td>
                                        <td> {price}€</td>
                                        <td>x</td>
                                        <td>{amount}</td>
                                        <td> = </td>
                                        <td>{amount * price}€</td>
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                    <button onClick={() => updateCart([])}>
                        Vider le panier
                    </button>
                </CartDescription>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Cart;
