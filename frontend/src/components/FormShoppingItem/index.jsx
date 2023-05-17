import { useContext, useState } from "react";
import { AuthContext } from "../../utils/context";
import styled from "styled-components";
import { ThemeContext } from "../../utils/context";

const StyledForm = styled.form`
    margin: auto;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: begin;

    & .bigLabel {
        font-size: 2em;
        margin: 0px 15px 0px 0px;
    }

    & input,
    & textarea {
        font-size: 2em;
        background: transparent;
        border: none;
        border-bottom: 1px solid ${(props) => props.thememode.color};
        color: ${(props) => props.thememode.text};
        margin: 15px;
        padding: 5px;
    }

    & input[type="radio"] {
    }

    & input:focus,
    & textarea:focus {
        outline: none;
        border-bottom: 1px solid orange;
    }

    & input[type="text"],
    & input[type="date"] {
        width: 100%;
    }
`;

function FormShoppingItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [cover, setCover] = useState("");
    const [category, setCategory] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [stock, setStock] = useState("");
    const { token } = useContext(AuthContext);
    const { themeMode } = useContext(ThemeContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const shoppingItem = {
            name,
            price,
            cover,
            category,
            shortDescription,
            longDescription,
            stock,
        };
        const response = await fetch("http://localhost:8000/api/shoppingItem", {
            method: "POST",
            body: JSON.stringify(shoppingItem),
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        console.log("Entrée");
        if (response.ok) {
            setName("");
            setPrice("");
            setStock("");
            setCover("");
            setCategory("");
            setShortDescription("");
            setLongDescription("");
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit} thememode={themeMode}>
            <h2>Ajouter un nouveau produit</h2>

            <input
                placeholder="Nom"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />

            <input
                placeholder="Prix"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />
            <input
                placeholder="Stock"
                type="text"
                onChange={(e) => setStock(e.target.value)}
                value={stock}
            />
            <input
                placeholder="Image url"
                type="text"
                onChange={(e) => setCover(e.target.value)}
                value={cover}
            />
            <input
                placeholder="Catégorie"
                type="text"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
            />
            <input
                placeholder="Brève description"
                type="text"
                onChange={(e) => setShortDescription(e.target.value)}
                value={shortDescription}
            />
            <input
                placeholder="Description"
                type="text"
                onChange={(e) => setLongDescription(e.target.value)}
                value={longDescription}
            />

            <button className="button">Ajouter</button>
        </StyledForm>
    );
}

export default FormShoppingItem;
