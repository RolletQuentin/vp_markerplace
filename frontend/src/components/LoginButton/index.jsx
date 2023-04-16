import { useContext, useState } from "react";
import { AuthContext } from "../../utils/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import fontawesome from "@fortawesome/fontawesome";
import styled, { keyframes } from "styled-components";

fontawesome.library.add(faUser);

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    width: 50px;
    height: 50px;

    &:hover {
        cursor: pointer;
    }
`;

const FormWrapper = styled.form``;

const printAnimation = keyframes`
    from {
        transform: scaleY(0%);
    }
    to {
        transform: scaleY(100%);
    }`;

const LoginWrapper = styled.div`
    position: absolute;
    background-color: white;
    color: black;
    transition: ${printAnimation} linear 1s;
`;

function LoginButton() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const { userState, setUserState, setToken } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            email,
            password,
        };

        const response = await fetch("http://localhost:8000/api/auth/login", {
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
        if (response.ok) {
            localStorage.setItem("user", JSON.stringify(json));
            localStorage.setItem("token", json.token);
            setUserState(json);
            setToken(json.token);
            setError(null);
        }
    };

    return (
        <div>
            <button
                onClick={() =>
                    isLoaded ? setIsLoaded(false) : setIsLoaded(true)
                }
            >
                <StyledFontAwesomeIcon icon="fa-solid fa-user" />
            </button>
            <LoginWrapper>
                {userState["user"] === null ? (
                    isLoaded ? (
                        <>
                            <FormWrapper onSubmit={handleSubmit}>
                                <h2>Se connecter</h2>

                                <label>Email :</label>
                                <input
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <label>Mot de passe :</label>
                                <input
                                    type="password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />

                                <button>Connexion</button>
                                <button onClick={() => setIsLoaded(false)}>
                                    Fermer
                                </button>
                            </FormWrapper>
                            <a href="/signup">Pas encore inscrit ?</a>
                        </>
                    ) : null
                ) : (
                    <button
                        onClick={() => {
                            setUserState({ user: null });
                            localStorage.removeItem("user");
                            localStorage.removeItem("token");
                        }}
                    >
                        Déconnexion
                    </button>
                )}
            </LoginWrapper>
        </div>
    );
}

export default LoginButton;
