import { createContext, useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../style/themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");
    const [montedComponent, setMountedComponent] = useState(false);
    const themeMode = theme === "light" ? lightTheme : darkTheme;

    const toggleTheme = () => {
        theme === "light" ? setMode("dark") : setMode("light");
    };

    const setMode = (mode) => {
        window.localStorage.setItem("theme", mode);
        setTheme(mode);
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme ? setTheme(localTheme) : setMode("light");
        setMountedComponent(true);
    }, []);

    return (
        <ThemeContext.Provider
            value={{ theme, toggleTheme, themeMode, montedComponent }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const savedCart = localStorage.getItem("cart");
    const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const totalPrice = cart.reduce(
        (acc, productType) => acc + productType.amount * productType.price,
        0
    );
    const totalAmount = cart.reduce(
        (acc, productType) => acc + productType.amount,
        0
    );

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

    return (
        <CartContext.Provider
            value={{ cart, updateCart, totalPrice, totalAmount, addToCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

// ------------------------------ Auth Context ---------------------------------------

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userState, setUserState] = useState({ user: null });
    const [token, setToken] = useState("");

    useEffect(() => {
        const localState = window.localStorage.getItem("user");
        const localToken = window.localStorage.getItem("token");
        localState ? setUserState(localState) : setUserState({ user: null });
        localToken ? setToken(localToken) : setToken("");
    }, []);

    return (
        <AuthContext.Provider
            value={{ userState, setUserState, token, setToken }}
        >
            {children}
        </AuthContext.Provider>
    );
};
