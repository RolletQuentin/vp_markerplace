import { useContext, useState } from "react";
import { AuthContext } from "../../utils/context";

function FormShoppingItem() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [cover, setCover] = useState("");
    const [category, setCategory] = useState("");
    const [shortDescription, setShortDescription] = useState("");
    const [longDescription, setLongDescription] = useState("");
    const [stock, setStock] = useState(0);
    const { token } = useContext(AuthContext);

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

        if (response.ok) {
            setName("");
            setPrice(0);
            setStock(0);
            setCover("");
            setCategory("");
            setShortDescription("");
            setLongDescription("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ajouter un nouveau produit</h2>

            <input
                placeholder="Nom"
                type="text"
                onChange={(e) => setName(e.target.value)}
            />
            <input
                placeholder="Stock"
                type="text"
                onChange={(e) => setStock(e.target.value)}
            />
            <input
                placeholder="Prix"
                type="text"
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                placeholder="Photo"
                type="text"
                onChange={(e) => setCover(e.target.value)}
            />
            <input
                placeholder="Category"
                type="text"
                onChange={(e) => setCategory(e.target.value)}
            />
            <input
                placeholder="Brève description"
                type="text"
                onChange={(e) => setShortDescription(e.target.value)}
            />
            <input
                placeholder="Description"
                type="text"
                onChange={(e) => setLongDescription(e.target.value)}
            />

            <button className="button">Ajouter</button>
        </form>
    );
}

export default FormShoppingItem;
