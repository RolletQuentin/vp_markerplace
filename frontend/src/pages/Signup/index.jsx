import { useState, useContext } from "react";
import { AuthContext } from "../../utils/context";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { userState, setUserState, setToken } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password,
        };

        const response = await fetch("http://localhost:8000/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();
        console.log(json);

        if (!response.ok) {
            setError(json.error);
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Se connecter</h2>

            <label>Email :</label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />

            <label>Description :</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button>Connexion</button>
        </form>
    );
}

export default Signup;
