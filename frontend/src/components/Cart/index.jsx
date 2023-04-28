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

    &:hover{
        opacity:70%;
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
    
    text-align:start;
    background: linear-gradient(#696484, #8788ba);
    color: white;
    border-radius: 10px;
    padding: 10px 10px 20px 10px;
    margin:auto;
    transition: ${printAnimation} 200ms;

    & table{
        margin: auto;

    }

    & td, th{
        border: 1px solid rgba(0, 0, 0, 0);
    }
`;
/**& table et &td, th c'est pour que l'affichage des produits fonctionne 
 * comme un tableau et normal que l'opacity soit de 0 c'est pour que les cellules en trop reste des cellules*/



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
                                    ({ cover, name, price, amount, size }, index) => (
                                        <FormListItems> {/**j'ai créé cette balise pour insérer la ligne entre chaque produit */}
                                            <tr key={`${name}-${index}`}>
                                                <td rowspan="2">{cover}</td>  {/*dans cette cellule il faudra insérer l'image*/}                                                                               
                                                <th colspan="15" >{name + "(" + size + ")"}</th> {/**le colspan="15" c'est pour centrer la cellule  */}
                                            </tr>  
                                            <tr key={`${name}-${index}`}>  
                                                <td>{price}€</td>
                                                <td>x</td>
                                                <td>{amount}</td>
                                                <td> = </td>
                                                <td>{amount * price}€</td>
                                                <td></td> {/**je sais pas comment faire pour reserer des cellules du coup j'ai créée bcp de cellule vide */}
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                            </tr>
                                            
                                            
                                        </FormListItems>
                                    )
                                )}
                            
                        </tbody>
                    </table>

                    <Formbutton>
                    <button onClick={() => updateCart([])}>
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
