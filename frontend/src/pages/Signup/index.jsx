import { useState, useContext } from "react";
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
    & input[type="date"],
    & input[type="password"] {
        width: 100%;
    }
`;

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { userState, setUserState, setToken } = useContext(AuthContext);
    const { themeMode } = useContext(ThemeContext);

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
        } else {
            setEmail("");
            setPassword("");
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit} thememode={themeMode}>
            <h2>Inscription</h2>

            <input
                value={email}
                placeholder="Email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                placeholder="Mot de passe"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button className="button">Connexion</button>
        </StyledForm>
    );
}

export default Signup;
